/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    name: `GROW`,
    menuLinks: [
      {
        name: "About",
        link: "/",
      },
      {
        name: "Workshop",
        link: "/page-2",
      },
      {
        name: "People",
        link: "/page-2",
      },
      {
        name: "FAQS",
        link: "/page-2",
      },
      {
        name: "Contact",
        link: "/page-2",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
