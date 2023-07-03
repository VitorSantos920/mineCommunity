import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const FieldsetContainer = styled('fieldset', {
  border: 'none',
  marginBottom: 'calc($defaultSpace * 1.75)',

  '&.form__checkbox': {
    alignItems: 'center',
    gap: 11,

    '& label, & input': { cursor: 'pointer' },
  },
});
