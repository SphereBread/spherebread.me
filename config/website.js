const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Matvey Gerasimov', // Navigation and Site Title
  siteTitleAlt: 'SphereBread', // Alternative Site title for SEO
  siteTitleShort: 'Kolobok', // short_name for manifest
  siteHeadline: 'Trying to do some programming', // Headline for schema.org JSONLD
  siteUrl: 'https://spherebread.me', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Meow',
  author: 'LekoArts', // Author for schema.org JSONLD

  userTwitter: '@SphereBread', // Twitter Username
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
