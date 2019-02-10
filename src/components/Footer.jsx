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
            let sponsors = data.allPrismicSponsor
                ? data.allPrismicSponsor.edges.map(edge => (
                      <div key={edge.node.id} className="m-8" style={{ flexBasis: "20rem", flexShrink: "1" }}>
                          <Img
                              style={{
                                  filter: "brightness(0) invert(1)"
                              }}
                              fluid={edge.node.data.logo.localFile.childImageSharp.fluid}
                          />
                      </div>
                  ))
                : null;
            let credits = data.prismicCredits
                ? data.prismicCredits.data.fields.map(field => (
                      <p className="py-2 px-4" key={field.credit}>
                          {field.credit}
                      </p>
                  ))
                : null;
            return (
                <div className="w-full h-full flex flex-col items-center justify-between" style={{ backgroundColor: "#212121" }}>
                    <div className="flex flex-row w-full flex-wrap items-center justify-around">{sponsors}</div>
                    <div className="text-grey-darker w-full flex flex-row justify-around md:justify-end">{credits}</div>
                </div>
            );
        }}
    />
);
