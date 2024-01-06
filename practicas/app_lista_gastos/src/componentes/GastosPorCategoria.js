import React from "react";
import {Header,Titulo,ContenedorHeader} from '../elementos/Header.js'
import BtnRegresar from "../elementos/BtnRegresar.js";

const GastosPorCategoria = () => {
    return (
        <>
        <Header>
          <ContenedorHeader>
            <BtnRegresar />
            <Titulo>Gastos por categoría</Titulo>
          </ContenedorHeader>
        </Header>
      </>
     );
}

export default GastosPorCategoria;