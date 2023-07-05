import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const InputContainer = styled('input', {
  backdropFilter: 'blur(5px)',
  background: '$inputBg',
  border: '1px solid #414141',
  borderRadius: 3,
  outline: 'none',
  padding: '.9rem .875rem',

  '&:not(input[type=checkbox])': {
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

  '&[type="checkbox"]': {
    appearance: 'none',
    height: 30,
    backgroundColor: 'transparent',
    border: '1px solid $inputBg',
    position: 'relative',

    '&::before': {
      backgroundColor: '$brandColor',
      content: '',
      height: 20,
      left: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(0)',
      transition: '100ms',
      width: 20,
    },

    '&:checked::before': { transform: 'translate(-50%, -50%) scale(1)' },
  },
});
