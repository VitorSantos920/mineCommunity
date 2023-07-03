import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const ButtonContainer = styled('button', {
  background: 'linear-gradient(134deg, #22AE75 0%, #00874F 100%)',
  color: '#fff',
  fontWeight: '$exb',
  fontSize: 'calc($defaultSize * 1.25)',
  padding: 'calc($defaultSpace * .75) $defaultSpace',
  width: '100%',
  border: 'none',
  borderRadius: '.75rem',
  borderTop: '3px solid rgba(118, 201, 166)',
  boxShadow: '0 3px 1px 0 #fff',
  cursor: 'pointer',
  transition: '1s',

  '&:hover': {
    textDecoration: 'underline',
  },
});
