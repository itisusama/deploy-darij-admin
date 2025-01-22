/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#FCFDFF', // Custom background color
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
}
