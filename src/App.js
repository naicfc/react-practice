import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/nav';
import Main from './components/Main'

function App() {
  return (
    <div className='main-container'>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
