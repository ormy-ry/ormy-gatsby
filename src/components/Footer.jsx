import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
    <StaticQuery
        query={graphql`
            query {
                prismicCredits {
                    id
                    data {
                        fields {
                            credit
                        }
                    }
                }
                allPrismicSponsor {
                    edges {
                        node {
                            id
                            data {
                                name
                                link {
                                    url
                                }
                                logo {
                                    localFile {
                                        childImageSharp {
                                            fluid(quality: 90) {
                                                ...GatsbyImageSharpFluid
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <div className="footer flex row items-end justify-between">
                    <div>{}</div>
                    <div className="flex row h-full items-center">
                        {data.allPrismicSponsor
                            ? data.allPrismicSponsor.edges.map(edge => (
                                  <div key={edge.node.id} className="my-4 mx-16" style={{ width: "20rem", maxHeight: "100%" }}>
                                      <a href={edge.node.data.link.url}>
                                          <Img
                                              style={{ filter: "brightness(0) invert(1)" }}
                                              fluid={edge.node.data.logo.localFile.childImageSharp.fluid}
                                          />
                                      </a>
                                  </div>
                              ))
                            : null}
                    </div>
                    <div className="px-4 py-2 text-grey-light">
                        {data.prismicCredits
                            ? data.prismicCredits.data.fields.map(field => <p key={field.credit}>{field.credit}</p>)
                            : null}
                    </div>
                </div>
            );
        }}
    />
);
