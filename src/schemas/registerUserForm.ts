import { z } from 'zod';

export const registerUserFormSchema = z
  .object({
    firstName: z.string().nonempty('Insira seu primeiro nome!'),
    lastName: z.string().nonempty('Insira seu último nome!'),
    email: z
      .string()
      .nonempty('O e-mail é obrigatório!')
      .email('Formato de e-mail inválido!'),
    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
    passwordRepeat: z.string().nonempty('A senha é obrigatória'),
    contentCreator: z
      .string()
      .nullable()
      .refine((value) => value === 'yes' || value === 'no', {
        message: 'Selecione uma opção!',
      }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: 'As senhas não coincidem!',
    path: ['passwordRepeat'],
  });
