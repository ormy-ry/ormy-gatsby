import React from "react";
import { StaticQuery, graphql } from "gatsby";

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
                <BackgroundImage
                    className="hero-header"
                    imgStyle={{ objectFit: "cover", height: "100%" }}
                    fluid={data.prismicHeaderBackground.data.image.localFile.childImageSharp.fluid}
                >
                    <Logo />
                </BackgroundImage>
            );
        }}
    />
);
