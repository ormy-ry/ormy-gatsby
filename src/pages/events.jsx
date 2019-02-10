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
                  start={edge.node.data.start}
                  location={edge.node.data.location}
              />
          ))
        : null;
    return (
        <Layout>
            <div className="container mx-auto px-4 pb-4 pt-16">
                <div className="grid-col">
                    {newEvents}
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
