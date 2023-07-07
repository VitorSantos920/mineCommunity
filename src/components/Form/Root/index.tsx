import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface FormProps {
  children: ReactNode;
}

export function FormRoot({ children }: FormProps) {
  const methods = useForm();

  const formSubmit = (data: unknown) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form
        action="#"
        onSubmit={methods.handleSubmit(formSubmit)}
        className="main__login-form"
        method="post"
      >
        {children}
      </form>
    </FormProvider>
  );
}
