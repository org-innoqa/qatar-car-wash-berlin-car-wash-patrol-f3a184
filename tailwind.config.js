/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#fbf7ed',
          200: '#f4ebd2',
          300: '#ebdcb1',
          400: '#d9be78',
          500: '#c59b27',
          600: '#b2841e',
          700: '#956619',
          800: '#764f17',
          900: '#614015',
          DEFAULT: '#D4AF37',
        },
        german: {
          black: '#000000',
          red: '#FF0000',
          gold: '#FFCC00'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'carbon-pattern': "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}