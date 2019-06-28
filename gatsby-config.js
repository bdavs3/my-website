module.exports = {
  siteMetadata: {
    title: `Ben's Personal Website`,
    description: `A portfolio / blog / book review / music / ? website for Ben Davis`,
    author: `Ben Davis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
