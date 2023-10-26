import './App.css';
import React from 'react';
import freecodeCampLogo from './imagenes/logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import { useState } from 'react';//useState es un hook en React que permite a los componentes de función mantener y actualizar su estado interno. Con useState, puedes agregar estado a un componente de función sin tener que convertirlo en un componente de clase.

function App() {
  const [numClics, setNumClics] = useState(0);//0 es el valor inicial de número de clics

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(numClics - 1);
    if(numClics <= 0){
      setNumClics(numClics - 0);
    }
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freecodeCampLogo}
        alt='accesibibilidad'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto="clic" esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton  texto="reiniciar" esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
