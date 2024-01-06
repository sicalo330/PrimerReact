import React from "react";
import {Header,Titulo,ContenedorHeader} from '../elementos/Header.js'
import BtnRegresar from "../elementos/BtnRegresar.js";

const ListaDeGastos = () => {
    return (
        <>
        <Header>
          <ContenedorHeader>
            <BtnRegresar />
            <Titulo>Lista de gastos</Titulo>
          </ContenedorHeader>
        </Header>
        </>
     );
}

export default ListaDeGastos;