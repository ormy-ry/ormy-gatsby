import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import { EventRowMobile, EventRow } from "./EventTable";

export default () => (
    <StaticQuery
        query={graphql`
            query {
                Events: allPrismicEvent(
                    filter: { fields: { new: { eq: true } }, data: { body: { html: { ne: null } } } }
                    sort: { fields: [data___start], order: ASC }
                    limit: 10
                ) {
                    edges {
                        node {
                            ...events
                        }
                    }
                }
                Planned: allPrismicEvent(
                    filter: { fields: { new: { eq: true } }, data: { body: { html: { eq: null } } } }
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
            let hasFutureEvents = Object.keys(data.Events).length ? true : false;
            let hasPlannedEvents = Object.keys(data.Planned).length ? true : false;

            return (
                <div className="p-0 grid-col">
                    {hasFutureEvents ? (
                        <div className="card">
                            <div className="card-title">Tulevat tapahtumat</div>
                            <div className="card-body">
                                <table className="w-full table-fixed lg:hidden w-full">
                                    <tbody className="">
                                        {data.Events.edges.map(edge => (
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
                                        {data.Events.edges.map(edge => (
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
                    {hasPlannedEvents ? (
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
                                        {data.Planned.edges.map(edge => (
                                            <tr>
                                                <td>{edge.node.data.title.text}</td>
                                                <td>{edge.node.fields.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : null}
                    {!hasFutureEvents && !hasPlannedEvents ? (
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
