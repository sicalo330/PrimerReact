import React from "react";
import { Header, ContenedorHeader, Titulo } from "../elementos/Header";
import BtnRegresar from "../elementos/BtnRegresar";
import BarraTotalGastado from "./BarraTotalGastado";
import FormularioGastos from "./FormularioGastos";
import { useParams } from "react-router-dom";
import useObtenerGasto from "../hooks/useObtenerGasto";

const EditarGastos = () => {
    //Extraemos el id de useParams
    const {id} = useParams();
    const [gasto] = useObtenerGasto(id)

    return (
        <>
            <Header>
            <ContenedorHeader>
                <BtnRegresar ruta='/listaGastos' />
                <Titulo>Editar gastos</Titulo>
            </ContenedorHeader>
            </Header>
            <FormularioGastos gasto={gasto}/>
            <BarraTotalGastado />
      </>
     );
}

export default EditarGastos;