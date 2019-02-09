import React from "react";

import Layout from "../components/Layout";
import BoardCard from "../components/BoardCard";

export default ({ data }) => {
    if (!data.allPrismicBoard) {
        return null;
    }

    let cards = data.allPrismicBoard.edges.map(edge => (
        <BoardCard
            title={edge.node.data.title.text}
            body={edge.node.data.body.html}
            fluid={edge.node.data.photo.localFile.childImageSharp.fluid}
        />
    ));

    return (
        <Layout>
            <div className="container mx-auto px-4 pb-4 py-16">
                <div className="grid-col">{cards ? cards : null}</div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allPrismicBoard(sort: { fields: [data___year], order: DESC }) {
            edges {
                node {
                    ...boards
                }
            }
        }
    }
`;
