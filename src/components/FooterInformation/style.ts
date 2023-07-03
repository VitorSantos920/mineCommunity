import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const DivContainer = styled('div', {
  '&:hover svg': { transform: 'rotate(360deg)' },

  svg: { transition: '1s' },
});
