import React,{useReducer} from "react";
import Boton from "./elementos/Boton.js";

//Acción
//{tipo: 'Incrementar'}

//Estado inicial
const contadorInicial = {contador:0};//Recibirá un contador

//Reducer
const reducer = (estado, accion) => {
    switch(accion.tipo){//Recordar que accion es {tipo: 'Incrementar'} y {tipo:'Disminuir'} y estamos accediendo a tipo
        case 'Incrementar':
            return {contador:estado.contador + 1};
        case 'Disminuir':
            return {contador:estado.contador - 1};
        case 'Reiniciar':
            return {contador:estado.contador = 0}
        default:
            return estado;
    };
};

const EjemploUseReducer = () => {
    const [estado, dispatch] = useReducer(reducer,contadorInicial);
    return(
        <div>
        <h1>Estado: {estado.contador}</h1>
        <Boton negro marginRight onClick={() => dispatch({tipo:'Incrementar'})}>Incrementar</Boton>{/*Dispatch llama una acción */}
        <Boton negro marginRight onClick={() => dispatch({tipo:'Disminuir'})}>Disminuir</Boton>
        <Boton negro marginRight onClick={() => dispatch({tipo:'Reiniciar'})}>Reiniciar</Boton>
    </div>
    );
}

export default EjemploUseReducer;