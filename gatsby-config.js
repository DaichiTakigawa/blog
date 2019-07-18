module.exports = {
  siteMetadata: {
    title: 'MEMO',
    description: 'A Simple Memo',
    author: 'Daichi Takigawa',
    siteUrl: 'https://DaichiTakigawa.github.io/blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/contents/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/contents/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-code-titles',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          'gatsby-remark-autolink-headers',
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MEMO',
        short_name: 'MEMO',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#575757',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
}
