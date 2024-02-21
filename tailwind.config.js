/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'back-color': 'rgb(238, 241, 246)',
        white: '#fff',
        'black-hue': 'rgb(13, 12, 34)',
        'page-blue': 'rgb(3, 86, 159)',
        todo: '#ff2476',
        doing: '#ffa943',
        done: '#41a737',
        'under-review': 'rgb(26, 175, 254)',
        'second-text': 'rgb(155, 154, 156)',
      },
      fontSize: {
        'xl': ['1rem', {
          lineHeight: '1.70rem',
          letterSpacing: '-0.01em',
          fontWeight: '300',
        }],
        '2xl': ['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        '3xl': ['1.875rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
      }
    },
  },
  plugins: [],
}

