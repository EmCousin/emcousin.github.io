module.exports = {
  darkMode: 'media',
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html'
  ],
  theme: {
    theme: {
      extend: {}
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}
