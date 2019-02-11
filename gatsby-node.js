const moment = require("moment-timezone");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    const now = moment();

    if (node.internal.type === `PrismicEvent`) {
        let start = moment(node.data.start).tz("Europe/Riga");

        createNodeField({
            name: `slug`,
            node,
            value: `/events/${node.slugs[0]}${start.format("DD-MM-YYYY")}`
        });

        createNodeField({
            name: `datetime`,
            node,
            value: start.format("DD.MM. HH:mm")
        });

        createNodeField({
            name: `datetimeFull`,
            node,
            value: start.format("DD.MM. YYYY HH:mm")
        });

        createNodeField({
            name: `date`,
            node,
            value: start.format("DD.MM.")
        });

        if (start > now) {
            createNodeField({
                node,
                name: `new`,
                value: true
            });
        } else {
            createNodeField({
                node,
                name: `new`,
                value: false
            });
        }
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const eventTpl = path.resolve(`src/templates/EventPost.jsx`);
        // Query for markdown nodes to use in creating pages.
        resolve(
            graphql(
                `
                    {
                        allPrismicEvent {
                            edges {
                                node {
                                    id
                                    fields {
                                        slug
                                    }
                                    data {
                                        body {
                                            html
                                        }
                                        title {
                                            text
                                        }
                                        location
                                        start(formatString: "DD.MM. HH:mm")
                                    }
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                // Create pages for each markdown file.
                result.data.allPrismicEvent.edges.forEach(({ node }) => {
                    createPage({
                        path: `${node.fields.slug}`,
                        component: eventTpl,
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                            id: node.id
                        }
                    });
                });
            })
        );
    });
};
