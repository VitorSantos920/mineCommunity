import { InputHTMLAttributes } from 'react';
import { InputContainer } from './style';

type FormInputProps = InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ ...props }: FormInputProps) {
  return <InputContainer {...props} />;
}
