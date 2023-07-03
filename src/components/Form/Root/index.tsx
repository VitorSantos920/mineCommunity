import { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
}

export function FormRoot({ children }: FormProps) {
  return (
    <form action="#" className="main__login-form" method="post">
      {children}
    </form>
  );
}
