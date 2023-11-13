/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './image.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      red: '#ff000055',
      green: '#00ff0055',
      white: '#fff',
      black: '#000',
      dark: '#1F4172',
      pink: '#F1B4BB',
      light: '#FDF0F0',
      darker: '#132043',
    },
  },
  plugins: [],
};
