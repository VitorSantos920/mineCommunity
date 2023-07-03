import { stitches } from '../../../../stitches.config';

const { styled } = stitches;

export const InputContainer = styled('input', {
  padding: '.4rem .875rem',
  outline: 'none',
  borderRadius: 3,
  border: '1px solid #414141',
  background: '$inputBg',
  backdropFilter: 'blur(5px)',

  '&:not(input[type=checkbox])': {
    width: '100%',
    marginTop: 'calc($defaultSpace * 0.5)',
  },

  '&, &::placeholder': {
    color: '#BAACAC',
  },

  '&[type="checkbox"]': {
    appearance: 'none',
    height: 30,
    backgroundColor: 'transparent',
    border: '1px solid $inputBg',
    position: 'relative',

    '&::before': {
      content: '',
      position: 'absolute',
      width: 20,
      height: 20,
      backgroundColor: '$brandColor',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) scale(0)',
      transition: '100ms',
    },

    '&:checked::before': {
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
});
