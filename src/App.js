import './App.css';
import React from 'react';
import freeodeCampLogo from './imagenes/logo.png';
import Boton from './componentes/Boton';

function App() {
  const manejarClic = () => {
    console.log("clic");
  }

  const reiniciarContador = () => {
    console.log("reiniciar");
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeodeCampLogo}
        alt='accesibibilidad'/>
      </div>
      <div className='contendor-principal'>
        <Boton texto="clic" esBotonClic={true}
        manejarClic={manejarClic} />
        <Boton  texto="reiniciar" esBotonClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
