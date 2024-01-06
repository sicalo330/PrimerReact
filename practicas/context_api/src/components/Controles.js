import React, {useContext} from "react";
import styled from "styled-components";
import { ContextoTema } from "../contextos/contextoTema";

const Controles = () => {
    //Estamos estrayendo las funciones de ContextoTema por lo tanto es importante escribir bien el nombre de las funciones
    const {
         aumentarFuente,
         disminuirFuente,
         moverIzquierda,
         moverCentrar,
         moverDerecha
         } = useContext(ContextoTema)

    return(
        <ContenedorControles>
            <div>
                <Boton onClick={aumentarFuente}>Aumentar fuente</Boton>
                <Boton onClick={disminuirFuente}>Disminuir fuente</Boton>
            </div>
            <div>
                <Boton onClick={moverIzquierda}>Izquierda</Boton>
                <Boton onClick={moverCentrar}>Centro</Boton>
                <Boton onClick={moverDerecha}>Derecha</Boton>
            </div>
        </ContenedorControles>
    );
}

const ContenedorControles = styled.div`
    margin-top: 20px;
`;

const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;

    &:hover {
        background: #191668;
    }
`;

export default Controles;