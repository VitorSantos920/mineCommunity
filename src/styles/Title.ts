import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const Title = styled('h1', {
  marginBottom: '.75rem',
  textTransform: 'uppercase',

  '@bp340': {
    fontSize: '1.3rem',
  },
});
