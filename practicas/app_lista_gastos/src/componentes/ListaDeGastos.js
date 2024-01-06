import React from "react";
import {Header,Titulo,ContenedorHeader} from '../elementos/Header.js'
import BtnRegresar from "../elementos/BtnRegresar.js";
import { useAuth } from "../contextos/AuthContext.js";

const ListaDeGastos = () => {
  const {usuario} = useAuth()
  console.log(usuario)

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