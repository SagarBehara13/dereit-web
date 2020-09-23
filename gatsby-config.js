module.exports = {
  siteMetadata: {
    title: `DeREIT`,
    description: `Invest, earn and grow, on the decentralized real estate`,
    author: `Adam Azad <adam@adamazad.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          /* Google fonts */
          `Karla`,
          `Rubik`,
          `Open Sans\:400;600;700`,
          `Playfair Display\:400;600`
        ],
        display: 'swap',
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
