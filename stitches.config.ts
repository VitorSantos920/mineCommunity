import { createStitches } from '@stitches/react';

export const stitches = createStitches({
  theme: {
    colors: {
      brandColor: '#33E29A',
    },

    fonts: {
      mainFont: 'Kufam, sans-serif',
    },

    fontSizes: {
      defaultSize: '1rem ',
    },
  },

  media: {},
});

const injectGlobalStyles = stitches.globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundImage: 'url("mineBanner.png")',
    minHeight: '100vh',
    backgroundSize: 'cover',
    fontFamily: '$mainFont',
    color: '#fff',
  },

  button: {
    fontFamily: 'inherit ',
  },

  a: {
    fontFamily: 'inherit',
    color: 'inherit',
    textDecoration: 'none ',
  },
});

injectGlobalStyles();
