/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 'bg-[url(*)]': true,
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        
        '2xl': '6rem',
      },
    },
    extend: {
      // Colors
      colors: {
        primaryColor: '#FF8D00',
        grayText: '#3A3A3A'

      },
      // Font Family
      fontFamily: {
        'primary': ['Primary-fonts', 'sans-serif'],
        'secondary': ['Secondary-fonts', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

