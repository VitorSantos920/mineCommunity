import { TestContainer } from './test';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <TestContainer>
        <h2>Abc</h2>
        <button
          style={{
            fontSize: '24px',
          }}
        >
          Button
        </button>
        <a href="#">LINK</a>
      </TestContainer>
    </div>
  );
}

export default App;
