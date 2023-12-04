import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import { FormularioInicioSesion } from './componentes/formularioInicioSesion';
//import Contador from './componentes/ClaseContador'
//import ContadorFuncional from './componentes/FuncionalContador';
import './index.css';
import Boton from './componentes/elementos/Boton.js';
import EjemploUseReducer from './componentes/EjemploUseReducer.js';
import Blog from './componentes/Blog.js';

const App = () =>{
  const [sesion, cambiarEstadoSesion] = useState(true);//El useState puede cambiar de estado a seison o cambiarEstadoSesion
  //React cargará el componente siempre que el estado cambie
  return(
  <div className='contenedor'>
    {sesion === true?
    <>
      <Usuario />
      <Blog />
      <EjemploUseReducer />
      {/*<ContadorFuncional cantidadAIncrementar = {10} cantidadADisminuir = {3} /> */}
      <Boton largo marginTop onClick={() => cambiarEstadoSesion(false)}>Cerrar sesion</Boton>
    </>
    :
    <>
    <FormularioInicioSesion cambiarEstadoSesion = {cambiarEstadoSesion} />
    </>
      }
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
