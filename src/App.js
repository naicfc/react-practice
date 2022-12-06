import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <main>
        <div>
          <Joke 
          setup="What do you call a cow that can do maths?"
          punchline="A cowculator"
          />
          <Joke 
          setup="What is faster than a calculator?"
          punchline="A calcuNOW"
          />
          <Joke 
          setup="How do you follw Will Smith in the snow?"
          punchline="You follow the fresh prints"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
