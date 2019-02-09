require("dotenv").config({
    path: `.env`
});

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ÖRMY ry`,
                short_name: `ÖRMY`,
                description: "Oulun yliopiston raskaan musiikin ystävät ry",
                lang: "fi",
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#212121`,
                icon: `src/images/icon512.jpg`,
                display: `minimal-ui`
            }
        },
        {
            resolve: `gatsby-source-prismic`,
            options: {
                repositoryName: `${process.env.PRISMIC_REPO}`,
                accessToken: `${process.env.PRISMIC_API_KEY}`,
                linkResolver: ({ node, key, value }) => post => `/${post.uid}`
            }
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-netlify`
    ]
};
