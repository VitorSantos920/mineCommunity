import { Link } from 'react-router-dom';
import { Form } from '../components/Form';
import { Title } from '../styles/Title';
import { loginUserFormSchema } from '../schemas/loginUserForm';

export function Login() {
  return (
    <>
      <Title>Faça Login</Title>
      <Form.Root schema={loginUserFormSchema}>
        <Form.Fieldset className="form__email">
          <Form.Label labelFor="email" text="E-mail" />
          <Form.Input
            type="email"
            placeholder="vitordev@gmail.com"
            name="email"
            id="email"
          />
          <Form.ErrorMessage field="email" />
        </Form.Fieldset>
        <Form.Fieldset className="form__password">
          <Form.Label labelFor="password" text="Senha" />
          <Form.Input
            type="password"
            name="password"
            id="password"
            placeholder="***************"
          />
          <Form.ErrorMessage field="password" />
        </Form.Fieldset>
        <Form.Fieldset className="form__checkbox flex">
          <Form.Input
            type="checkbox"
            id="checkbox-remember"
            name="checkbox-remember"
          />
          <Form.Label labelFor="checkbox-remember" text="Lembrar minha senha" />
        </Form.Fieldset>
        <Form.Button text="Entrar na conta" />
      </Form.Root>
      <a href="#">Esqueceu a senha?</a>
      <span>
        Não possui uma conta? <Link to="/register">Crie uma</Link>!
      </span>
    </>
  );
}
