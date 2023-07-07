import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ZodTypeAny } from 'zod';

interface FormProps {
  children: ReactNode;
  schema: ZodTypeAny;
}

export function FormRoot({ schema, children }: FormProps) {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

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
