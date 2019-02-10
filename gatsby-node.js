const moment = require("moment");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    const now = moment();

    if (node.internal.type === `PrismicEvent`) {
        let date = node.data.start ? "-" + moment(node.data.start).format("DD-MM-YYYY") : "";
        let slug = `/events/${node.slugs[0]}${date}`;

        createNodeField({
            name: `slug`,
            node,
            value: slug
        });

        createNodeField({
            name: `datetime`,
            node,
            value: moment(node.data.start).format("DD.MM. HH:mm")
        });

        createNodeField({
            name: `datetimeFull`,
            node,
            value: moment(node.data.start).format("DD.MM. YYYY HH:mm")
        });

        if (node.data.start) {
            if (moment(node.data.start) > now) {
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
