import { Link } from 'react-router-dom';
import { Form } from '../../components/Form';
import { InputControlContainer } from './style';
import { Title } from '../../styles/Title';
import { registerUserFormSchema } from '../../schemas/registerUserForm';

export function Register() {
  return (
    <>
      <Title>Cadastre-se</Title>
      <Form.Root schema={registerUserFormSchema}>
        <InputControlContainer className="form__name-container flex">
          <Form.Fieldset className="form__firstname">
            <Form.Label labelFor="firstname" text="Primeiro nome" />
            <Form.Input
              type="text"
              placeholder="Vitor"
              name="firstName"
              id="firstName"
            />
            <Form.ErrorMessage field="firstName" />
          </Form.Fieldset>

          <Form.Fieldset className="form__lastname">
            <Form.Label labelFor="lastname" text="Último nome" />
            <Form.Input
              type="text"
              placeholder="Santos"
              name="lastName"
              id="lastName"
            />
            <Form.ErrorMessage field="lastName" />
          </Form.Fieldset>
        </InputControlContainer>

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

        <InputControlContainer className="form__passwords-container flex">
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

          <Form.Fieldset className="form__password--repeat">
            <Form.Label labelFor="password_repeat" text="Confirme sua Senha" />
            <Form.Input
              type="password"
              name="passwordRepeat"
              id="password_repeat"
              placeholder="***************"
            />
            <Form.ErrorMessage field="passwordRepeat" />
          </Form.Fieldset>
        </InputControlContainer>

        <InputControlContainer className="form__content-creator-container flex">
          <p>Você é criador de conteúdo?</p>
          <Form.Fieldset className="form__content-creator">
            <div className="flex">
              <Form.Label labelFor="yes" text="Sim" />
              <Form.Input
                type="radio"
                name="contentCreator"
                value="yes"
                id="yes"
              />
              <Form.Label labelFor="no" text="Não" />
              <Form.Input
                type="radio"
                name="contentCreator"
                value="no"
                id="no"
              />
            </div>
            <Form.ErrorMessage field="contentCreator" />
          </Form.Fieldset>
        </InputControlContainer>

        <Form.Fieldset className="form__checkbox flex">
          <Form.Input
            type="checkbox"
            id="checkbox-remember"
            name="checkbox-remember"
          />
          <Form.Label
            labelFor="checkbox-remember"
            text="Mantenha-me conectado"
          />
        </Form.Fieldset>
        <Form.Button text="Realizar Cadastro" />
      </Form.Root>
      <span>
        Já possui uma conta? <Link to="/">Faça seu login</Link>!
      </span>
    </>
  );
}
