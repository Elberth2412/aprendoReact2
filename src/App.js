import logo from './logo.svg';
import './App.css';
import HolamMundo from './componentes/holamundo';
import Datos from './componentes/datos';

const App = () => {
  return (
    <div className="App">
      
      <HolamMundo />

      <form>
        <Datos
          etiqueta = "NOMBRE"
          tipo = "text"
        />

        <Datos
          etiqueta = "CONTRASEÑA"
          tipo = "password"
        />

      </form>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
