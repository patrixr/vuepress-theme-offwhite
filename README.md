# vuepress-theme-offwhite

> ✏️ Plain Theme for VuePress.

Fork of [vuepress-theme-offwhite](https://github.com/viko16/vuepress-theme-offwhite)

## Features
- 💡 Simple Configuration.
- 🖼️ `/README.md` content will be **IGNORE** by this theme, and replace with posts list as screenshot.
- 📅 The list of posts is sorted by the following two fields:
  - `lastUpdated` based Git Commit **(Default)** - [Detail](https://vuepress.vuejs.org/theme/default-theme-config.html#last-updated)
  - `date` field in FrontMatter **(Higher Priority)** - [Detail](https://vuepress.vuejs.org/guide/frontmatter.html)

## Installation

> Note: Work For VuePress 1.x

```shell
$ npm install vuepress-theme-offwhite --save-dev
# or
$ yarn add vuepress-theme-offwhite --dev
```

## Usage

Modify your `.vuepress/config.js` and provide the `theme` option.

```js
module.exports = {
  theme: 'offwhite',
}
```

And that's some additional configs: (Optional)
```js
module.exports = {
  theme: 'offwhite',
  themeConfig: {
    author: 'YOUR NAME', // will display on the page footer
    navbar: { // will display below the title
      YOUR_SITE_NAME: 'YOUR_SITE_URL',
    }
  }
}
```

## Development

```sh
npm run dev
```

## License

[MIT License](https://opensource.org/licenses/MIT)
