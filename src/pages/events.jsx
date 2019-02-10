import React from "react";

import Layout from "../components/Layout";
import EventCard from "../components/EventCard";
import EventTable from "../components/EventTable";

export default ({ data }) => {
    let newEvents = data.New
        ? data.New.edges.map(edge => (
              <EventCard
                  key={edge.node.fields.slug}
                  title={edge.node.data.title.text}
                  body={edge.node.data.body.html}
                  start={edge.node.fields.datetime}
                  location={edge.node.data.location}
              />
          ))
        : null;
    let plannedEvents = data.Planned
        ? data.Planned.edges.map(edge => (
              <tr>
                  <td>{edge.node.data.title.text}</td>
                  <td>{edge.node.fields.datetime}</td>
              </tr>
          ))
        : null;
    return (
        <Layout>
            <div className="container mx-auto px-4 pb-4 pt-16">
                <div className="grid-col">
                    {newEvents}
                    {plannedEvents ? (
                        <div className="card">
                            <div className="card-title">Suunnitellut tapahtumat</div>
                            <div className="card-body">
                                <table className="w-full table-fixed">
                                    <tbody>{plannedEvents}</tbody>
                                </table>
                            </div>
                        </div>
                    ) : null}
                    {data.Old.edges.length ? (
                        <>
                            <div className="card">
                                <div className="card-title">Menneet tapahtumat</div>
                                <div className="card-body">
                                    <EventTable fullStart={true} events={data.Old.edges} />
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        New: allPrismicEvent(
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
        Old: allPrismicEvent(filter: { fields: { new: { eq: false } } }, sort: { fields: [data___start], order: DESC }, limit: 20) {
            edges {
                node {
                    ...events
                }
            }
        }
    }
`;
