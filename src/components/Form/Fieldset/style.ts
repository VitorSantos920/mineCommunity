import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const FieldsetContainer = styled('fieldset', {
  border: 'none',
  marginBottom: 'calc($defaultSpace * 1.75)',
  textAlign: 'left',

  '&.form__checkbox': {
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '.75rem',

    '& label, & input': { cursor: 'pointer' },
  },

  '&.form__content-creator': {
    marginBottom: 0,

    div: { alignItems: 'center', gap: '.75rem', marginBottom: 0 },
  },

  '@bp320': {
    '&.form__checkbox': { justifyContent: 'center' },
  },
});
