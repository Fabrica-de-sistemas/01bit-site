/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Habilitar o modo escuro com a classe 'dark' no HTML
  theme: {
    colors: {
      primary: {
        '01': '#7845E5',
        '02': '#CBB2FF',
        '03': '#502E99',
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        text: "var(--color-text)",
      },
      secondary: {
        '01': '#222222',
        '02': '#555555',
        '03': '#0D0D0D',
        secondary: "var(--color-secondary)",
      },
      grayColors: {
        '01': '#F2F2F2',
      },
      otherColors: {
        '01': '#FFFFFF',
        '02': '#E54545',
      },
    },
    extend: {
      boxShadow: {
        boxShadow: '4px 3px 10px 0px rgba(128, 128, 128, 0.50)',
      },
      screens: {
        md840px: '840px',
        screen320px: '320px',
        screen414px: '414px',
        screen360px: '360px',
      },
      gridAutoColumns: {
        900: 'calc((100% / 3) - 12px)',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
