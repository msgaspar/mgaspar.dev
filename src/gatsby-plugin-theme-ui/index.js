import { colors, darkModeColors } from './colors';

const theme = {
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  colors: {
    ...colors,
    modes: {
      dark: {
        ...darkModeColors,
      },
    },
  },
  fonts: {
    body: 'Signika, sans-serif',
    heading: 'Nunito Sans, sans-serif',
    hand: '"Covered By Your Grace", "Nunito Sans", sans-serif',
  },
  fontSizes: [
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '4rem',
    '4.5rem',
  ],
  lineHeights: {
    body: 1.625,
  },
  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
    '4rem',
    '8rem',
    '16rem',
    '32rem',
  ],
  fontWeights: {
    light: 300,
    regular: 400,
    semi: 600,
    bold: 700,
    extra: 800,
  },
  styles: {
    root: {
      overflowY: 'scroll',
      height: '100%',
      'body, #___gatsby, #gatsby-focus-wrapper': {
        height: '100%',
      },
      '*::selection': {
        background: '#2daadb4d',
      },
    },
  },
};

export default theme;
