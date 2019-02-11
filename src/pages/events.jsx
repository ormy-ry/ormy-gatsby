import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import EventCard from "../components/EventCard";
import EventTable from "../components/EventTable";

import Clock from "../assets/icons/Clock";

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
              <li key={edge.node.id} className="py-1 text-grey-darkest list-reset border-grey-light" style={{ borderBottom: "2px" }}>
                  <ul className="list-reset">
                      <li className=" mt-1 mb-2 mx-1 font-semibold">{edge.node.data.title.text}</li>
                      <li className="flex flex-row items-center my-1">
                          <div className="h-5 mx-1 text-font-semibold text-grey-dark">
                              <Clock />
                          </div>
                          {edge.node.fields.date}
                      </li>
                  </ul>
              </li>
          ))
        : null;
    return (
        <Layout>
            <div className="container mx-auto px-4 pb-4 pt-16">
                <div className="grid-events">
                    <div className="grid-col" style={{ gridArea: "new", padding: "0" }}>
                        {newEvents}
                    </div>
                    <div>
                        {plannedEvents ? (
                            <div className="card">
                                <div className="card-title">Suunnitellut tapahtumat</div>
                                <div className="card-body">
                                    <ul className="w-full list-reset">{plannedEvents}</ul>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    {data.Old.edges.length ? (
                        <>
                            <div className="card" style={{ gridArea: "old" }}>
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
