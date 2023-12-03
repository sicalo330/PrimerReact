import React, {useState} from "react";
import Boton from './elementos/Boton.js'

const ContadorFuncional = (props) =>{
    const [cuenta,cambiarCuenta] = useState(0)
    const incrementar = (cantidad) =>cambiarCuenta(cuenta + cantidad);
    const disminuir = (cantidad) =>cambiarCuenta(cuenta - cantidad);

    return(
        <div>
            <h1>ContadorFuncional: {cuenta}</h1>
            <Boton negro marginRight onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton negro marginRight oonClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Boton>
        </div>
    )
}

export default ContadorFuncional;