import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import { FormularioInicioSesion } from './componentes/formularioInicioSesion';
import Contador from './componentes/ClaseContador'
import ContadorFuncional from './componentes/FuncionalContador';

const App = () =>{
  const [sesion, cambiarEstadoSesion] = useState(true);//El useState puede cambiar de estado a seison o cambiarEstadoSesion
  //React cargará el componente siempre que el estado cambie
  return(
  <>
    {sesion === true?
    <>
      <Usuario />
      {/*<Contador cantidadAIncrementar = {10} cantidadADisminuir = {3} /> <ContadorFuncional cantidadAIncrementar = {10} cantidadADisminuir = {3} />*/ }
      <Contador cantidadAIncrementar = {10} cantidadADisminuir = {3} />
      <FormularioInicioSesion />
      <button onClick={() => cambiarEstadoSesion(false)}>Cerrar sesion</button>
    </>
    :
    <>
    <p>No has iniciado sesion</p>
    <FormularioInicioSesion cambiarEstadoSesion = {cambiarEstadoSesion} />
    {/*     <button onClick={() => cambiarEstadoSesion(true)}>Iniciar sesión</button>*/}
    </>
      }
  </>
  );
}

/*
const jsx = (
  //Puedo poner un div o dejarlo vacío, pero debe tener algo encerrado de un contenedor de etiquetas parecido a HTML
  // el ? se le llama operador ternario, si una variable es true hará algo(izquierda) y si es false harpa otra cosa(derecha)
  //Sí, se puede poner un bloque de código
  //En la linea 15 o similar estamos preguntando si pais existe, de ser así debe mostrar la etiqueta que viene a continuación
  //El .map recorre el arreglo
  <>
    {sesion === true?
    <>
      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario />
    </>
    :
     <p>No has iniciado sesion</p>}
  </>
);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
