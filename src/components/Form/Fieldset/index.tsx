import { ReactNode } from 'react';
import { FieldsetContainer } from './style';

interface FormFieldsetProps {
  children: ReactNode;
}

export function FormFieldset({ children }: FormFieldsetProps) {
  return <FieldsetContainer>{children}</FieldsetContainer>;
}
