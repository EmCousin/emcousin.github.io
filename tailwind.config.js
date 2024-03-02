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
  corePlugins: {
    preflight: false
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        'slide-in-from-left': 'slide-in-from-left 0.5s both',
        'slide-in-from-right': 'slide-in-from-right 0.5s both'
      },
      keyframes: {
        'slide-in-from-left': {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    }
  }
}
