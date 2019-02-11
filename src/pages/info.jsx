import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Card from "../components/Card";
import BoardCard from "../components/BoardCard";

export default ({ data }) => {
    const board = data.allPrismicBoard.edges[0].node.data;
    return (
        <Layout>
            <div className="container mx-auto px-4 pb-4 py-16">
                <div className="grid-info">
                    <div style={{ gridArea: "membership" }}>
                        <Card title={data.prismicMembership.data.title.text} body={data.prismicMembership.data.body.html} />
                    </div>
                    <div style={{ gridArea: "board" }}>
                        <BoardCard
                            title={board.title.text}
                            body={board.body.html}
                            fluid={board.photo.localFile.childImageSharp.fluid}
                            linkToBoards={true}
                        />
                    </div>
                    <div style={{ gridArea: "contact" }}>
                        <Card title={data.prismicContact.data.title.text} body={data.prismicContact.data.body.html} />
                    </div>
                    <div style={{ gridArea: "documents" }}>
                        <Card title={data.prismicDocuments.data.title.text} body={data.prismicDocuments.data.body.html} />
                    </div>
                    {}
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        prismicMembership {
            data {
                title {
                    text
                }
                body {
                    html
                }
            }
        }
        prismicDocuments {
            data {
                title {
                    text
                }
                body {
                    html
                }
            }
        }
        prismicContact {
            data {
                title {
                    text
                }
                body {
                    html
                }
            }
        }
        allPrismicBoard(limit: 1, sort: { fields: [data___year], order: DESC }) {
            edges {
                node {
                    ...boards
                }
            }
        }
    }
`;
