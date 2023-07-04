import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const ButtonContainer = styled('button', {
  background: 'linear-gradient(134deg, #22AE75 0%, #00874F 100%)',
  border: 'none',
  borderRadius: '.75rem',
  borderTop: '3px solid rgba(118, 201, 166)',
  boxShadow: '0 3px 1px 0 #fff',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: '$exb',
  fontSize: 'calc($defaultSize * 1.25)',
  marginBottom: 'calc($defaultSpace * 1.75)',
  padding: 'calc($defaultSpace * .75) $defaultSpace',
  transition: '1s',
  width: '100%',

  '&:hover': { textDecoration: 'underline' },

  '@bp320': {
    '&': {
      fontSize: 'calc($defaultSize * .80)',
    },
  },
});
