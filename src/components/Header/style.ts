import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const HeaderContainer = styled('header', {
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(to bottom, #121212 0%, rgba(18, 18, 18, 0.70) 50%, rgba(18, 18, 18, 0.00) 100%)',

  '.header__brand': {
    alignItems: 'center',
    margin: '.975rem 0',
    gap: 'calc($defaultSpace * 0.5)',

    '&-text': {
      textTransform: 'uppercase',
      fontWeight: '$exb',
      fontSize: 'calc($defaultSize * 2)',
    },
  },

  '.header__menu-items li': {
    padding: '.5rem 3vw',
    fontWeight: '$b',
    textTransform: 'uppercase',
    borderRadius: 6,

    '&:first-child': {
      background: 'rgba(0, 0, 0, .3)',
      color: '$brandColor',
    },

    a: {
      position: 'relative',

      '&::before': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 2,
        backgroundColor: '#fff',
        width: 0,
        transition: 'width 1s',
      },

      '&:hover::before': {
        width: '100%',
      },
    },
  },
});
