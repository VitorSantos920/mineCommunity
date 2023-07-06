import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const InputControlContainer = styled('div', {
  gap: '1.25rem',

  '&.form__content-creator-container': {
    marginBottom: 'calc(var(--space-defaultSpace) * 1.75)',
    alignItems: 'center',
  },

  '@bp445': { flexDirection: 'column' },
});
