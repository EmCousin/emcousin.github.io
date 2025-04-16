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
      ),
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              animationDelay: value
            }
          }
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
  theme: {
    extend: {
      animation: {
        'slide-in-from-left': 'slide-in-from-left var(--animation-duration) both',
        'slide-in-from-right': 'slide-in-from-right var(--animation-duration) both',
        'flip-and-zoom-in': 'flip-and-zoom-in var(--animation-duration) both',
        'fade-in': 'fade-in var(--animation-duration) both'
      },
      keyframes: {
        'slide-in-from-left': {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'flip-and-zoom-in': {
          '0%': { transform: 'translateY(200%) rotateY(180deg) scale(0.1)', opacity: 0 },
          '30%': { transform: 'translateY(-20%) rotateY(90deg) scale(0.3)', opacity: 1 },
          '100%': { transform: 'translateY(0) rotateY(0deg) scale(1)', opacity: 1 }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }
    }
  }
}
