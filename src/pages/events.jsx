import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import EventCard from "../components/EventCard";
import EventTable from "../components/EventTable";

export default ({ data }) => {
    const plannedEvents = data.New ? data.New.edges.filter(edge => {
        return edge.node.data.body.text === "" || edge.node.data.body.text === null;
    }) : [];

    const newEvents = data.New ? data.New.edges.filter(edge => {
        return edge.node.data.body.text !== "" && edge.node.data.body.text !== null;
    }) : [];

    const newEventNodes = newEvents ? newEvents.map(edge => (
        <EventCard
            key={edge.node.fields.slug}
            title={edge.node.data.title.text}
            body={edge.node.data.body.html}
            start={edge.node.fields.datetime}
            location={edge.node.data.location}
        />
    )) : null;

    return (
        <Layout>
            <div className="container mx-auto py-16">
                <div className="grid-col">
                    {newEventNodes}
                    <div>
                        {plannedEvents.length ? (
                            <div className="card">
                                <div className="card-title">Suunnitellut tapahtumat</div>
                                <div className="card-body">
                                    <table className="w-full table-fixed w-full">
                                        <thead>
                                            <tr>
                                                <th>Tapahtuma</th>
                                                <th className="float-right md:float-none">Aika</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {plannedEvents.map(event => (
                                                <tr key={event.node.id}>
                                                    <td>{event.node.data.title.text}</td>
                                                    <td className="float-right md:float-none">{event.node.fields.date}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td />
                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    {data.Old.edges.length ? (
                        <div className="card">
                            <div className="card-title">Menneet tapahtumat</div>
                            <div className="card-body">
                                <EventTable fullStart={true} events={data.Old.edges} />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        New: allPrismicEvent(filter: { fields: { new: { eq: true } } }, sort: { fields: [data___start], order: ASC }, limit: 10) {
            edges {
                node {
                    ...events
                }
            }
        }
        Old: allPrismicEvent(filter: { fields: { new: { eq: false } } }, sort: { fields: [data___start], order: DESC }, limit: 20) {
            edges {
                node {
                    ...events
                }
            }
        }
    }
`;
