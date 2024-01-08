import React from "react";
import {Header,Titulo,ContenedorHeader} from '../elementos/Header.js'
import BtnRegresar from "../elementos/BtnRegresar.js";
import BarraTotalGastado from "./BarraTotalGastado.js";
import useObtenerGastosMesCategoria from "../hooks/useObtenerGastosMesCategoria.js";
import {
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Valor
} from './../elementos/ElementosLista.js'
import IconoCategoria from "../elementos/IconoCategoria.js";
import convertirMoneda from './../funciones/convertirMoneda.js';

const GastosPorCategoria = () => {
  const gastosCategoria = useObtenerGastosMesCategoria()

    return (
        <>
        <Header>
          <ContenedorHeader>
            <BtnRegresar />
            <Titulo>Gastos por categoría</Titulo>
          </ContenedorHeader>
        </Header>
        <ListaDeCategorias>
          {gastosCategoria.map((elemento, index) => {
            return(
              <ElementoListaCategorias key={index}>
                <Categoria><IconoCategoria id={elemento.categoria}/> {elemento.categoria}</Categoria>
                <Valor>{convertirMoneda(elemento.cantidad)}</Valor>
              </ElementoListaCategorias>
            );
          })}
        </ListaDeCategorias>
        <BarraTotalGastado />
      </>
     );
}

export default GastosPorCategoria;