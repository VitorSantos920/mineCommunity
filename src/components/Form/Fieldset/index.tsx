import { ReactNode } from 'react';

interface FormFieldsetProps {
  children: ReactNode;
}

export function FormFieldset({ children }: FormFieldsetProps) {
  return <fieldset>{children}</fieldset>;
}
