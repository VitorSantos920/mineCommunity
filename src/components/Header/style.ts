import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const HeaderContainer = styled('header', {
  alignItems: 'center',
  background:
    'linear-gradient(to bottom, #121212 0%, rgba(18, 18, 18, 0.70) 50%, rgba(18, 18, 18, 0.00) 100%)',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1,

  '.header__brand': {
    alignItems: 'center',
    gap: 'calc($defaultSpace * 0.5)',
    margin: '.975rem 0',

    '&-text': {
      fontSize: 'calc($defaultSize * 2)',
      fontWeight: '$exb',
      height: 34,
      textTransform: 'uppercase',
    },
  },

  '.header__menu-items li': {
    borderRadius: 6,
    fontWeight: '$b',
    padding: '.5rem 3vw',
    textTransform: 'uppercase',

    '&:first-child': {
      background: 'rgba(0, 0, 0, .3)',
      color: '$brandColor',
    },

    a: {
      position: 'relative',

      '&::before': {
        bottom: 0,
        backgroundColor: '#fff',
        content: '',
        height: 2,
        left: 0,
        position: 'absolute',
        transition: 'width 1s',
        width: 0,
      },

      '&:hover::before': { width: '100%' },
    },
  },

  '.header__menu--mobile, svg': { display: 'none' },

  '@bp625': {
    '&': {
      background:
        'linear-gradient(180deg , #121212 0%, rgba(18, 18, 18, 0.70) 50%, rgba(18, 18, 18, 0.00) 100%)',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    '.header__menu--desktop': { display: 'none' },

    svg: { display: 'block' },

    '.header__menu--mobile.true': {
      background: '$inputBg',
      borderRadius: '0 0 .75rem .75rem',
      display: 'block',
      height: 500,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '50vw',
      zIndex: 1,

      '.header__menu-items': {
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-around',
      },
    },
  },
});
