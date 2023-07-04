import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const MainContainer = styled('main', {
  backdropFilter: 'blur(2.5px)',
  background: 'rgba(38, 38, 38, 0.80)',
  border: '1px solid rgba(115, 115, 115, 0.50)',
  borderRadius: '.75rem',
  margin: '10.3rem auto 4rem',
  maxWidth: 500,
  padding: 'calc($defaultSpace * 2) 2.25rem',
  textAlign: 'center',

  '> a': {
    color: '$brandColor',

    '&:hover': { textDecoration: 'underline' },
  },

  '@bp500': { margin: '8.2rem 1rem 2.5rem' },
});
