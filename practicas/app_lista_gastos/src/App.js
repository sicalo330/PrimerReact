import React from "react";
import {Header,Titulo,ContenedorHeader,ContenedorBotones} from './elementos/Header.js'
import Boton from "./elementos/Boton.js";

const App = () => {
  return (
    <>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/gastosPorCategoria">Categorías</Boton>
            <Boton to="/listaGastos">Lista de gastos</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
   );
}

export default App;