module.exports = {
  siteMetadata: {
    title: `MEMO`,
    description: `A Simple Memo`,
    author: `Daichi Takigawa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          `gatsby-remark-autolink-headers`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MEMO`,
        short_name: `MEMO`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}
