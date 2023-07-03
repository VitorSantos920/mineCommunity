import { ReactNode } from 'react';
import { FieldsetContainer } from './style';

interface FormFieldsetProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function FormFieldset({ children, ...props }: FormFieldsetProps) {
  return <FieldsetContainer {...props}>{children}</FieldsetContainer>;
}
