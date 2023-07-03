import { stitches } from '../../stitches.config';

const { styled } = stitches;

export const MainContainer = styled('main', {
  borderRadius: '.75rem',
  border: '1px solid rgba(115, 115, 115, 0.50)',
  background: 'rgba(38, 38, 38, 0.80)',
  backdropFilter: 'blur(2.5px)',
  maxWidth: 500,
  margin: '0 auto',
  textAlign: 'center',
});
