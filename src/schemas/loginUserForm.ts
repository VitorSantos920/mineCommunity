import { z } from 'zod';

export const loginUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido!'),
  password: z.string().nonempty('A senha é obrigatória'),
  rememberPassword: z.boolean().optional(),
});
