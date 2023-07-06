import { createStitches } from '@stitches/react';

export const stitches = createStitches({
  theme: {
    colors: {
      brandColor: '#33E29A',
      inputBg: '#262626',
    },

    fonts: {
      mainFont: 'Kufam, sans-serif',
    },

    fontSizes: {
      defaultSize: '1rem ',
    },

    space: {
      defaultSpace: '1rem',
    },

    fontWeights: {
      nm: 400,
      md: 500,
      exb: 600,
      b: 700,
    },
  },

  media: {
    bp625: '(max-width: 625px)',
    bp500: '(max-width: 500px)',
    bp400: '(max-width: 445px)',
    bp320: '(max-width: 320px)',
  },
});

const injectGlobalStyles = stitches.globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: 'url("mineBanner.png") no-repeat center center',
    minHeight: '100vh',
    backgroundSize: 'cover',
    fontFamily: '$mainFont',
    color: '#fff',
  },

  button: { fontFamily: 'inherit ' },

  a: {
    fontFamily: 'inherit',
    color: 'inherit',
    textDecoration: 'none ',
  },

  '.flex': { display: 'flex' },

  ul: { listStyle: 'none' },

  '::-webkit-scrollbar': { width: 10 },

  '::-webkit-scrollbar-track': { background: '$inputBg' },

  '::-webkit-scrollbar-thumb': {
    background: '$brandColor',
    borderRadius: '.75rem',
  },
});

injectGlobalStyles();
