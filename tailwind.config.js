/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./proposal/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        geeko: {
          50: '#f2f9ec',
          100: '#e3f3d6',
          200: '#c8e7b0',
          300: '#a5d781',
          400: '#8fe038',
          500: '#73ba25', // openSUSE primary green
          600: '#5c971c',
          700: '#467417',
          800: '#3a5d17',
          900: '#173f35', // openSUSE pine dark
          950: '#0c221a',
        },
        cream: {
          50: '#fafbf6',
          100: '#f5f6ed', // Main mockup cream background
          200: '#f7f9ee', // Button & card fill
          300: '#e5ebd6',
          400: '#d2dac0', // Button bevel border
          500: '#b8c39e',
        },
        forest: {
          900: '#10351f', // Dark green tab header
          950: '#0a2213',
        }
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'sans-serif'],
        sans: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'beveled': '0 6px 0px 0px rgba(70, 116, 23, 0.4), 0 8px 16px rgba(0, 0, 0, 0.08)',
        'beveled-cream': '0 6px 0px 0px #ccd5b8, 0 8px 16px rgba(0, 0, 0, 0.06)',
        'beveled-active': '0 2px 0px 0px #ccd5b8',
        'beveled-green': '0 6px 0px 0px #447714, 0 10px 20px rgba(115, 186, 37, 0.35)',
        'panel-border': '0 0 0 2px #264a2c',
      }
    },
  },
  plugins: [],
}
