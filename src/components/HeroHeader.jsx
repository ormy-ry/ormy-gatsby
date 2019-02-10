import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import Logo from "./Logo";

export default () => (
    <StaticQuery
        query={graphql`
            query {
                prismicHeaderBackground {
                    data {
                        image {
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 2440, quality: 90) {
                                        ...GatsbyImageSharpFluid
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
                <div className="hero-header" style={{ position: "relative" }}>
                    <Img
                        style={{ position: "absolute", bottom: "0", top: "0", left: "0", right: "0", width: "100%", zIndex: "-1" }}
                        fluid={data.prismicHeaderBackground.data.image.localFile.childImageSharp.fluid}
                    />
                    <Logo style={{ zIndex: "1" }} />
                </div>
            );
        }}
    />
);
