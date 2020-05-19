console.log("BUILD ON: " + process.env.NODE_ENV)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `play.itsmeow.dev`,
    description: `Minecraft Server Network - play.itsmeow.dev`,
    author: `itsmeow`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-141623735-4`,
        head: true,
        anonymize: false,
      },
    },
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `play.itsmeow.dev`,
        short_name: `play.itsmeow.dev`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `minimal-ui`,
        icon: `src/data/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
