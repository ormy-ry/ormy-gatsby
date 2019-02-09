import React from "react";
import { StaticQuery, graphql } from "gatsby";
import EventCard from "./EventCard";
import Card from "./Card";
import EventTable from "./EventTable";

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allPrismicEvent(filter: { fields: { new: { eq: true } } }, sort: { fields: [data___start], order: ASC }, limit: 10) {
                    edges {
                        node {
                            ...events
                        }
                    }
                }
            }
        `}
        render={data => {
            if (!data.allPrismicEvent) {
                return (
                    <Card
                        title={"Ei tulevia tapahtumia kalenterissa"}
                        body={`
                            <p>
                                Ei tulevia tapahtumia listattuna. Örmyn hallitus suunnittelee ja julkaisee säännöllisesti uutisia tapahtumia
                                näillä sivuilla sekä Facebook -ryhmässä. 
                                </p>
                            <p>Katso menneet tapahtumat <a href="/events">tapahtumasivulta</a>.<p>
                        `}
                    />
                );
            } else if (data.allPrismicEvent.edges.length === 1) {
                return (
                    <div data={data}>
                        {data.allPrismicEvent.edges.map(edge => (
                            <EventCard
                                key={edge.node.id}
                                title={edge.node.data.title.text}
                                subtitle={"Seuraava tapahtuma"}
                                body={edge.node.data.body.html}
                                start={edge.node.data.start}
                                location={edge.node.data.location}
                            />
                        ))}
                    </div>
                );
            } else {
                return (
                    <div className="card">
                        <div className="card-body">
                            <EventTable events={data.allPrismicEvent.edges} />
                        </div>
                    </div>
                );
            }
        }}
    />
);
