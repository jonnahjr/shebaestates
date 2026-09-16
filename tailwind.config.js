/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px'
      },
      colors: {
        estate: {
          forest: '#16281D',
          'forest-light': '#1F3527',
          moss: '#2D4736',
          olive: '#45634D',
          sand: '#FAF7F2',
          cream: '#F4ECE1',
          parchment: '#EAE1D2',
          earth: '#3B2E26',
          umber: '#241B16',
          charcoal: '#131714',
          dark: '#0C100D',
          gold: '#C2A26F',
          'gold-light': '#DFCA9F',
          brass: '#9E7E47',
          muted: '#738076',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        luxury: '0.18em',
      }
    },
  },
  plugins: [],
}
