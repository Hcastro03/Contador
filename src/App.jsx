import React from 'react';
import Boton from "./componentes/boton";
import Contador from './componentes/contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

import './App.css';

function App() {

  const [numClic, setNumClic] = useState(0); 

  const manejarClic = () => {

    setNumClic(numClic + 1);

  }

  const reiniciarContador = () => {
    setNumClic(0);
  }

  return (
   
      <div className='App'> 

          <div className='freecodecamp-logo-contenedor'>
              <img className="freecodecamp-logo"
              src={freeCodeCampLogo} 
              alt="" />

          </div>

          <div className='contenedor-principal'>

            <Contador numClic={numClic} />

              <Boton 
                texto="Clic"
                esBotonDeClic= {true}
                manejarClic={manejarClic}
              />

              <Boton 
                texto="Reiniciar"
                esBotonDeClic ={false}
                manejarClic={reiniciarContador}
              />

          </div>
      </div> 
    
   
  )
}

export default App
