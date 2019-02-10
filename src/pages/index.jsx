import React from "react";

import Layout from "../components/Layout";
import HeroHeader from "../components/HeroHeader";
import EventsList from "../components/EventsList";
import { graphql } from "gatsby";

export default ({ data }) => {
    return (
        <Layout>
            <HeroHeader />
            <div className="container mx-auto p-4">
                <div className="-mt-24">
                    <div className="w-full grid-home" style={{ zIndex: "100000" }}>
                        <div className="card" style={{ gridArea: "about" }}>
                            <div className="card-title">{data.prismicAbout.data.title.text}</div>
                            <div className="card-body">
                                <div dangerouslySetInnerHTML={{ __html: data.prismicAbout.data.body.html }} />
                            </div>
                            <div className="card-footer" />
                        </div>
                        <div>
                            <EventsList style={{ gridArea: "events" }} />
                        </div>
                        <div>
                            <div className="card" style={{ gridArea: "contact" }}>
                                <div className="card-title">{data.prismicContact.data.title.text}</div>
                                <div className="card-body">
                                    <div dangerouslySetInnerHTML={{ __html: data.prismicContact.data.body.html }} />
                                </div>
                                <div className="card-footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    fragment contact on PrismicContact {
        data {
            title {
                text
            }
            body {
                html
            }
        }
    }
    fragment about on PrismicAbout {
        data {
            title {
                text
            }
            body {
                html
            }
        }
    }
    fragment headerbg on PrismicHeaderBackground {
        data {
            image {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 2440) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
    fragment events on PrismicEvent {
        fields {
            slug
            datetime
            datetimeFull
        }
        data {
            body {
                html
            }
            title {
                text
            }
            location
            start
            fullStart: start(formatString: "DD.MM. YYYY HH:mm")
        }
    }
    fragment boards on PrismicBoard {
        data {
            title {
                text
            }
            body {
                html
            }
            year
            photo {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1000, quality: 90) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }

    query {
        prismicContact {
            ...contact
        }
        prismicAbout {
            ...about
        }
        prismicHeaderBackground {
            ...headerbg
        }
        allPrismicEvent(filter: { fields: { new: { eq: true } } }) {
            edges {
                node {
                    ...events
                }
            }
        }
    }
`;
