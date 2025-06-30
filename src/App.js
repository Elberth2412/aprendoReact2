import HolamMundo from './componentes/holamundo';
import Datos from './componentes/datos';
import TwiterCard from './componentes/twiterCard';
import './App.css'
import { useState } from 'react';

const App = () => {

  const users = [
    {
      userName: "Elberht",
      name: 'Elberth Antonio Luque Chavez',
      isfollowing: false
    },
    {
      userName: "Francisco",
      name: "Francisco Luque Davila",
      isfollowing: true
    }
  ]

  return (
    <div className="App">
        {
          users.map(user =>{
            const { userName, name, isfollowing } = user
            return (
              <TwiterCard key = {userName} userName={userName} isfollowing = {isfollowing}>
                {name}
              </TwiterCard>
            )
          })
        }
        <TwiterCard userName ="Francisca" inicialisFollowing = {true}>
          Francisca Davila Conde
        </TwiterCard>
    </div>
  );
}

export default App;