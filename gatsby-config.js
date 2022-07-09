module.exports = {
  siteMetadata: {
    title: `Seek My Vision`,
    description: `This is a 100% free, on-demand video-based spoken English course for students in grades 4th–8th. Hurry Up! Join Now!`,
    author: `@rohitsharma`,
    siteUrl: `https://seekmyvision.com`,
    keywords: `free spoken english course, spoken english course , on demand english course free, free spoken english course certificate,
    spoken english course,
spoken english course online,
spoken english course coaching,
spoken english course online preparation,
best online spoken english course,
online spoken english course india`,
image: `src/images/png.jpeg`,


  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seek My Vision`,
        short_name: `smv`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo1.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
