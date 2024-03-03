const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'media',
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.md',
    './*.html'
  ],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
           // Class name
          'animation-duration': (value) => {
            return {
              "--animation-duration": value
            }
          },
        },
        { values: theme('transitionDuration') }
      )
    }),
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-from-left': 'slide-in-from-left var(--animation-duration) both',
        'slide-in-from-right': 'slide-in-from-right var(--animation-duration) both'
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
