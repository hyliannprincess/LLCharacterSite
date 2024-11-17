/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Love Live! Sunshine!!"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "AnilistGraqhQL",

        fieldName: "Anilist",

        url: `https://graphql.anilist.co`,
      },
    },
  ],
}
