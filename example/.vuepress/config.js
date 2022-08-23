const path = require('path')

module.exports = {
  title: 'Example Site',
  description: 'Example for vuepress-theme-offwhite',
  theme: path.resolve(__dirname, '../../'),
  themeConfig: {
    subtitle: 'Some test subtitle',
    author: 'patrixr',
    navbar: {
      Github: "https://github.com/patrixr",
      Twitter: "https://twitter.com"
    },
    footerLinks: {
      Github: "https://github.com/patrixr",
      Twitter: "https://twitter.com"
    }
  },
}
