import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const InputContainer = styled('input', {
  backdropFilter: 'blur(5px)',
  background: '$inputBg',
  border: '1px solid #414141',
  borderRadius: 3,
  outline: 'none',
  padding: '.9rem .875rem',

  '&:not(input[type=checkbox], [type=radio])': {
    marginTop: 'calc($defaultSpace * 0.5)',
    width: '100%',
  },

  '&': {
    '&:focus': {
      borderColor: '$brandColor',
    },
    '&, &::placeholder': {
      color: '#BAACAC',
    },
  },

  '&[type=radio], &[type=checkbox]': {
    appearance: 'none',
    position: 'relative',

    '&::before, &::before': {
      content: '',
      backgroundColor: '$brandColor',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(0)',
      transition: '100ms',
    },

    '&:checked::before': {
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },

  '&[type=radio]': {
    backdropFilter: 'none',
    height: '1rem',
    borderRadius: '50%',

    '&::before': {
      width: '1rem',
      height: '1rem',
      borderRadius: '50%',
    },
  },

  '&[type="checkbox"]': {
    height: '1.875rem',
    backgroundColor: 'transparent',
    border: '1px solid $inputBg',

    '&::before': {
      height: '1.25rem',
      width: '1.25rem',
    },
  },
});
