import HolamMundo from './componentes/holamundo';
import Datos from './componentes/datos';
import TwiterCard from './componentes/twiterCard';
import './App.css'

const App = () => {
  return (
    <div className="App">

        <TwiterCard isfollower = {true} userName = "Elberth">
          Elberth Luque chavez
        </TwiterCard>

        <TwiterCard isfollower = {false} userName="Francisca">
          Francisca Davila Conde
        </TwiterCard>
          
    </div>
  );
}

export default App;