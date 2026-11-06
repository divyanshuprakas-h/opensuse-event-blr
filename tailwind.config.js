/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        geeko: {
          50: '#f4fbf0',
          100: '#e6f7de',
          200: '#ceefbe',
          300: '#aee294',
          400: '#8dd167',
          500: '#73ba25', // Canonical openSUSE green
          600: '#5a971c',
          700: '#467419',
          800: '#395d18',
          900: '#314e18',
          950: '#172d09',
        },
        pine: {
          800: '#1c493e',
          900: '#173f35', // openSUSE deep pine
          950: '#0b231d',
        },
        obsidian: {
          900: '#0f1715',
          950: '#090e0d',
        },
        yast: {
          cyan: '#35b9ab',
          orange: '#ea6621',
          gold: '#f5a623',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
