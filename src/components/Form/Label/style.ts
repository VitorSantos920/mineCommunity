import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const LabelContainer = styled('label', {
  display: 'block',
  fontWeight: '$md',
  textAlign: 'left',

  '&[for="checkbox-remember"]': { textAlign: 'center' },
});
