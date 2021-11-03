/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    PARALLEL_SOURCING: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: "Certisured",
    titleTemplate: "Certisured",
    description: "Certisured",
    image: "/colored logo.svg",
    siteUrl: "https://certisured.com",
    author: "Analogica Software Development Pvt Ltd",
    authorSite: "",
    twitterUsername: "@certisured",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-MN4XH2HXRC"],
      },
    },

    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: false,
        },
        disableAutoprefixing: true,
        disableMinification: false,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMPENDPOINT,
      },
    },

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000, // Default to 100
        collectionTypes: [
          `author`,
          `ourreviews`,
          `get-toknow-ourpeople`,
          `home-technologyand-businness-consulting`,
          `home-software-development`,
          `home-training`,
          `homebannervideos`,
          `home-whatweare`,
          `empowering-constituent`,
          `lets-talk`,
          `home-whatwecando`,
          `whatwecando-mainpage`,
          `consulting-main-pages`,
          `software-main-page`,
          `bootcamp`,
          `video-reviews`,
          `whowe-are-section`,
          `whoweare-building-abetter-future`,
          `whoweare-our-approach`,
          `training-training-on-emerging-technologies`,
          `training-main-page`,
          `home-ourwork`,
          `webinar-mainpage`,
          `ml-demo-class`,
          `news-update`,
          `home-what-students-say`,
          `technology-stack`,
          `blogs`,
          `summer-schools`,
          `bootcamp-pages`,
          `all-trending-certifications`,
          `home-discords`,
          `footer-links`,
          `coming-soon-pages`,
          `bootcamp-landing-pages`,
          `blog-tags`,
          `blogs-categories`,
          `blog-authors`,
          `course-demo-lists`,
        ],
        singleTypes: [`home`],

        //If using single types place them in this array.
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },

    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Certisured`,
        short_name: `Certisured`,
        start_url: `/`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/pixels.js", // Change to the script filename
      },
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: process.env.YOUR_TAWK_ID,
        tawkKey: process.env.YOUR_TAWK_KEY,
        // get this from the tawk script widget
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          `/404`,
          `/blogs`,
          `/blogs-details`,
          `/get-hired`,
          `/bootcamp1`,
          `/bootcamp3`,
        ],
      },
    },
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-preact`,
  ],
}
