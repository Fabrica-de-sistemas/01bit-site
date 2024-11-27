/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        '01': '#7845E5',
        '02': '#CBB2FF',
        '03': '#502E99',
      },
      secondary: {
        '01': '#222222',
        '02': '#808080',
        '03': '#0D0D0D',
      },
      grayColors: {
        '01': '#F2F2F2',
      },
      otherColors: {
        '01': '#FFFFFF',
      },
    },
    extend: {
      boxShadow: {
        boxShadow: '4px 3px 10px 0px rgba(128, 128, 128, 0.50)',
      },
      screens: {
        screen320px: '320px',
        screen360px: '360px',
        screen414px: '414px',
      },
    },
  },
  plugins: [],
};
