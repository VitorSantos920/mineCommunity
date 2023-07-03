import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { MainContainer } from './styles/MainContainer';

function App() {
  return (
    <div>
      <Header />
      <MainContainer className="main">
        <img src="brand.svg" alt="Mine Brand" />
        <Form.Root>
          <Form.Fieldset className="form__email">
            <Form.Label labelFor="email" text="E-mail" />
            <Form.Input
              inputType="email"
              isRequired
              inputInfo="email"
              inputPlaceholder="vitordev@gmail.com"
            />
          </Form.Fieldset>
          <Form.Fieldset className="form__password">
            <Form.Label labelFor="password" text="Senha" />
            <Form.Input
              inputType="password"
              isRequired
              inputInfo="password"
              inputPlaceholder="***************"
            />
          </Form.Fieldset>
          <Form.Fieldset className="form__checkbox flex">
            <Form.Input inputType="checkbox" inputInfo="checkbox-remember" />
            <Form.Label
              labelFor="checkbox-remember"
              text="Lembrar minha senha"
            />
          </Form.Fieldset>
          <Form.Button text="Entrar na conta" />
        </Form.Root>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
