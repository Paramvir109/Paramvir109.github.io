const {
  name,
  siteTitle,
  siteDescription,
  siteKeyword,
  themeColor,
  backgroundColor,
  siteUrl,
  siteLogo,
  googleAnalyticsID
} = require('./site-config');
module.exports = {
    siteMetadata: {
      title: siteTitle,
      description: siteDescription,
      siteUrl: siteUrl
    },
    plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'image',
        path: `${__dirname}/src/static/images`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: googleAnalyticsID,
        head: true
      }
    },
    'gatsby-plugin-purgecss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: name,
        start_url: "/",
        background_color: backgroundColor,
        theme_color: themeColor,
        display: "minimal-ui",
        icon: siteLogo,
        icons: [
          {
            "src": "images/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "images/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "images/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "images/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "images/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "images/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "images/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "images/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }   
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: siteUrl + '/sitemap.xml',
        policy: [{ userAgent: '*', disallow: '' }]
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    ]
  };
  