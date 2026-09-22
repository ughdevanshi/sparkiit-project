/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#627d98',
          500: '#486581',
          600: '#334e68',
          700: '#243b53',
          800: '#102a43',
          900: '#0f2b5c',
          950: '#07152b',
        },
        brand: {
          navy: '#0f2b5c',
          navyDark: '#081833',
          navyLight: '#1e4282',
          gold: '#b45309',
          goldLight: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'corporate': '0 4px 20px -2px rgba(15, 43, 92, 0.08), 0 2px 6px -2px rgba(15, 43, 92, 0.05)',
        'corporate-lg': '0 10px 30px -4px rgba(15, 43, 92, 0.12), 0 4px 10px -2px rgba(15, 43, 92, 0.06)',
      }
    },
  },
  plugins: [],
}
