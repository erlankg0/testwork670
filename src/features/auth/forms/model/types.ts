import { z } from 'zod';

export const LoginFormSchema = z.object({
  username: z.string().min(3, 'Минимум 3 символа'),
  password: z
    .string()
    .min(6, { message: 'Пароль должен быть не менее 6 символов' }),
  /*  .regex(/[a-z]/, { message: 'Пароль должен содержать хотя бы одну строчную букву' })
    .regex(/[A-Z]/, { message: 'Пароль должен содержать хотя бы одну заглавную букву' })
    .regex(/[0-9]/, { message: 'Пароль должен содержать хотя бы одну цифру' })
    .regex(/[^a-zA-Z0-9]/, { message: 'Пароль должен содержать хотя бы один специальный символ' }),*/
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;
