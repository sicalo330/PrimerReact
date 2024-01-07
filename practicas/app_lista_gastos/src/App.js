import React from "react";
import {Header,Titulo,ContenedorHeader,ContenedorBotones} from './elementos/Header.js'
import Boton from "./elementos/Boton.js";
import BotonCerrarSesion from "./componentes/BotonCerrarSesion.js";
import FormularioGastos from "./componentes/FormularioGastos.js";

const App = () => {
  return (
    <>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/gastosPorCategoria">Categorías</Boton>
            <Boton to="/listaGastos">Lista de gastos</Boton>
            <BotonCerrarSesion />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
      <FormularioGastos />
    </>
   );
}

export default App;