/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: {
        light: '#0FC5FF',
        dark: '#0FC5FF',
      },
      secondary: {
        light: '#8B54FF',
        dark: '#8B54FF',
      },
      white: {
        light: '#FFFFFF',
        dark: '#FFFFFF',
      },
      black: {
        light: '#000000',
        dark: '#000000',
      },
      gray_00: {
        light: '#FFFFFF',
        dark: '#292F3F',
      },
      gray_01: {
        light: '#F5F5F5',
        dark: '#3B4359',
      },
      gray_02: {
        light: '#EEEEEE',
        dark: '#32394B',
      },
      gray_03: {
        light: '#666666',
        dark: '#9096A9',
      },
      gray_04: {
        light: '#3B4359',
        dark: '#EEEEEE',
      },
      gray_05: {
        light: '#292F3F',
        dark: '#FFFFFF',
      },
      card: {
        light: '#FFFFFF',
        dark: '#3B4359',
      },
    },
    fontSize: {
      x_small: '12px',
      small: '14px',
      medium: '16px',
      large: '18px',
      x_large: '24px',
      xx_large: '30px',
    },
    fontWeight: {
      normal: '400',
      semi_bold: '500',
      bold: '700',
    },
    boxShadow: {
      light:
        '0px 0px 16px 0px rgba(218, 226, 231, 0.3), 0px 24px 24px 0px rgba(181, 190, 197, 0.3)',
      dark: '0px 0px 16px 0px rgba(0, 0, 0, 0.20), 0px 24px 24px 0px rgba(0, 0, 0, 0.20)',
    },
  },
  darkMode: 'class',
  plugins: [],
};
