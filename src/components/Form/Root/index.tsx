import { ReactNode } from 'react';
import { FormContainer } from './style';

interface FormProps {
  children: ReactNode;
}

export function FormRoot({ children }: FormProps) {
  return (
    <FormContainer action="#" className="main__login-form" method="post">
      {children}
    </FormContainer>
  );
}
