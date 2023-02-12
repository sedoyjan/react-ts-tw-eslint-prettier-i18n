module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
  },
  theme: {
    fontFamily: {
      sans: ['sans-serif'],
    },
    colors: {
      // Reds
      red900: '#981b25',
      red700: '#c91d2b',
      red500: '#eb4755',
      red300: '#f9868f',
      red200: '#ffc2c9',
      red100: '#fee7e9',
      // Yellows
      yellow900: '#ff8800',
      yellow700: '#ffb200',
      yellow500: '#ffd400',
      yellow300: '#ffe566',
      yellow200: '#fff0a8',
      yellow100: '#fff8d6',
      // Greens
      green900: '#248f5b',
      green700: '#2eb875',
      green500: '#34d186',
      green300: '#86e4b7',
      green200: '#c5f7d9',
      green100: '#e3fded',
      // Purples
      purple900: '#313887',
      purple700: '#4450d5',
      purple500: '#5b68f6',
      purple300: '#848fff',
      purple200: '#b8beff',
      purple100: '#ebecff',
      // Neutral
      black: '#000000',
      neutral900: '#2f313f',
      neutral800: '#585a68',
      neutral700: '#818391',
      neutral600: '#a9abb9',
      neutral500: '#bfc0cb',
      neutral400: '#d3d4dc',
      neutral300: '#e9eaee',
      neutral200: '#f4f4f6',
      neutral100: '#f9fafb',
      white: '#ffffff',
      transparent: 'transparent',
      'background-grey': '#F4F4F6',
    },
    extend: {
      fontSize: {
        '3.5xl': '2.125rem',
        headingM: ['1.75rem', '2.25rem'],
        headingS: ['1.5rem', '2rem'],
        headingXS: ['1.25rem', '1.5rem'],
        bodyL: ['1.125rem', '1.5rem'],
        bodyM: ['1rem', '1.5rem'],
        bodyS: ['0.875rem', '1rem'],
        bodyXS: ['0.75rem', '1rem'],
      },
      padding: {
        13: '3.25rem',
        18: '4.5rem',
        26: '6.5rem',
      },
      margin: {
        0.5: '0.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        26: '6.5rem',
        43: '10.75rem',
      },
      minHeight: {
        100: '400px',
      },
      maxHeight: {
        '2lg': '35rem',
      },
      minWidth: {
        '2md': '30.5rem',
        '2lg': '35rem',
      },
      maxWidth: {
        '2md': '30.5rem',
        '2.5xl': '45rem',
        '3.5xl': '50rem',
        '2lg': '35rem',
      },
      lineHeight: {
        8.5: '2.125rem',
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem',
      },
      zIndex: {
        '-10': '-10',
      },
      screens: {
        '2md': '960px',
        '2lg': '1140px',
      },
      borderRadius: {
        '4xl': '1.75rem',
      },
      boxShadow: {
        green: '0 3px 16px 0 rgb(0 0 0 / 16%), 0 3px 16px 0 rgb(52 209 134 / 32%);',
      },
      letterSpacing: {
        wider2: '0.078125em',
      },
      gap: {
        18: '4.5rem',
      },
      spacing: {
        13: '3.25rem',
      },
      transformOrigin: {
        0: '0%',
      },
    },
  },
};
