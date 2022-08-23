const path = require('path')

module.exports = {
  title: 'Example Site',
  description: 'Example for vuepress-theme-offwhite',
  theme: path.resolve(__dirname, '../../'),
  themeConfig: {
    author: 'patrixr',
    footerLinks: {
      Github: "https://github.com/patrixr",
      Twitter: "https://twitter.com"
    }
  },
}
