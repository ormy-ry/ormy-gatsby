import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import { EventRowMobile, EventRow } from "./EventTable";

export default () => (
    <StaticQuery
        query={graphql`
            query {
                Events: allPrismicEvent(
                    filter: { fields: { new: { eq: true } } }
                    sort: { fields: [data___start], order: ASC }
                    limit: 10
                ) {
                    edges {
                        node {
                            ...events
                        }
                    }
                }
            }
        `}
        render={data => {
            const plannedEvents = data.Events ? data.Events.edges.filter(edge => {
                return edge.node.data.body.text === "" || edge.node.data.body.text === null;
            }) : [];

            const futureEvents = data.Events ? data.Events.edges.filter(edge => {
                return edge.node.data.body.text !== "" && edge.node.data.body.text !== null;
            }) : [];

            return (
                <div className="p-0 grid-col">
                    {futureEvents.length ? (
                        <div className="card">
                            <div className="card-title">Tulevat tapahtumat</div>
                            <div className="card-body">
                                <table className="w-full table-fixed lg:hidden w-full">
                                    <tbody className="">
                                        {futureEvents.map(edge => (
                                            <EventRowMobile
                                                key={edge.node.fields.slug}
                                                title={edge.node.data.title.text}
                                                start={edge.node.fields.datetime}
                                                location={edge.node.data.location}
                                                slug={edge.node.fields.slug}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                                <table className="w-full table-fixed hidden lg:table">
                                    <thead>
                                        <tr>
                                            <th>Tapahtuma</th>
                                            <th>Aika</th>
                                            <th>Paikka</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {futureEvents.map(edge => (
                                            <EventRow
                                                key={edge.node.fields.slug}
                                                title={edge.node.data.title.text}
                                                start={edge.node.fields.datetime}
                                                location={edge.node.data.location}
                                                slug={edge.node.fields.slug}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : null}
                    {plannedEvents.length ? (
                        <div className="card">
                            <div className="card-title">Suunnitellut tapahtumat</div>
                            <div className="card-body">
                                <table className="w-full table-fixed">
                                    <thead>
                                        <tr>
                                            <th>Tapahtuma</th>
                                            <th>Aika</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plannedEvents.map(edge => (
                                            <tr key={edge.node.id}>
                                                <td>{edge.node.data.title.text}</td>
                                                <td>{edge.node.fields.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : null}
                    {!plannedEvents.length && !futureEvents.length ? (
                        <div className="card">
                            <div className="card-title">Ei tulevia tapahtumia</div>
                            <div className="card-body">
                                Ei tulevia tapahtumia listattuna. Örmyn hallitus suunnittelee ja julkaisee säännöllisesti uutisia tapahtumia
                                näillä sivuilla sekä Facebook -ryhmässä. Katso menneet tapahtumat <Link to="/event">tapahtumasivulta</Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            );
        }}
    />
);
