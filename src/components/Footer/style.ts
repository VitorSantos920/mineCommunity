import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const FooterContainer = styled('footer', {
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '$defaultSpace',
  justifyContent: 'space-evenly',
  margin: '0 auto',
  maxWidth: '1366px',
  paddingBottom: '0.975rem',
  textAlign: 'center',

  '@bp625': {
    '&': {
      background:
        'linear-gradient(to top, #121212 0%, rgba(18, 18, 18, 0.70) 85%, rgba(18, 18, 18, 0.00) 100%)',
      flexDirection: 'column',
      gap: 'calc($defaultSpace * 3)',
    },
  },
});
