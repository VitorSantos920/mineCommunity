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
          <Form.Fieldset>
            <Form.Label labelFor="email" text="E-mail" />
            <Form.Input
              inputType="email"
              isRequired
              inputInfo="email"
              inputPlaceholder="vitordev@gmail.com"
            />
          </Form.Fieldset>
          <Form.Fieldset>
            <Form.Label labelFor="password" text="Senha" />
            <Form.Input
              inputType="password"
              isRequired
              inputInfo="password"
              inputPlaceholder="****"
            />
          </Form.Fieldset>
        </Form.Root>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
