/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `CSE Department, IIIT Delhi`,
    siteUrl: `https://www.iiitd-cse.netlify.app`,
    description: `This is the official website of the CSE Department of IIIT Delhi`,
  },
  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-json`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./site/`,
        name: `site-pages`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-remark`,
  ],
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
}
