import React from "react";
import Layout from "../components/Layout";
import EventCard from "../components/EventCard";
import { graphql } from "gatsby";

export default ({ data }) => {
    let post = data.allPrismicEvent.edges[0].node;
    return (
        <Layout>
            <div className="container mx-auto px-4 pb-4 py-16">
                <EventCard title={post.data.title.text} body={post.data.body.html} start={post.data.start} location={post.data.location} />
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($id: String) {
        allPrismicEvent(filter: { id: { eq: $id } }) {
            edges {
                node {
                    ...events
                }
            }
        }
    }
`;
