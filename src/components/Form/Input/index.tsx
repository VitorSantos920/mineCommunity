import { InputHTMLAttributes } from 'react';
import { InputContainer } from './style';
import { useFormContext } from 'react-hook-form';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function FormInput({ name, ...props }: FormInputProps) {
  const { register } = useFormContext();

  return <InputContainer {...props} {...register(name)} />;
}
