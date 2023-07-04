import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const FieldsetContainer = styled('fieldset', {
  border: 'none',
  marginBottom: 'calc($defaultSpace * 1.75)',

  '&.form__checkbox': {
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '.75rem',

    '& label, & input': { cursor: 'pointer' },
  },

  '@bp320': {
    '&.form__checkbox': {
      justifyContent: 'center',
    },
  },
});
