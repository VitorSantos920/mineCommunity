import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const MainContainer = styled('main', {
  backdropFilter: 'blur(2.5px)',
  background: 'rgba(38, 38, 38, 0.80)',
  border: '1px solid rgba(115, 115, 115, 0.50)',
  borderRadius: '.75rem',
  margin: 'calc($defaultSpace * 2.5) auto',
  maxWidth: 500,
  padding: 'calc($defaultSpace * 2) 36px',
  textAlign: 'center',

  '> a': {
    color: '$brandColor',

    '&:hover': { textDecoration: 'underline' },
  },
});
