import React, {useState, useEffect} from "react";
import Boton from './elementos/Boton.js'

const ContadorFuncional = (props) =>{
    //Al usar un hook, estos tienen que estar en un componente o en otro hook y estar en la parte de arriba
    //Otra regla de los hook es que no se pueden usar en ocndicionales o ciclos
    const [cuenta,cambiarCuenta] = useState(0)

    /*
        useEffect(() => {
        console.log("El componente cargó por primera vez")
    }, []);//Este arreglo hace que useEffect cargue por primera vez
    */

    //Quiero que el useEffect haga algo cuando el contador cambie y no cuando se renderice

    /*
        useEffect(() => {
        console.log("El estado del contador cambió")
    },[cuenta]);//Cuendo cuenta cambie, useEffect hará algo
    */

    useEffect(() => {
        //Código del efecto
        //Cuando un componente cierre o se vaya useEffect hará esto
        return(() => {
            console.log("Adios componente")
        })
    },[]);

    const incrementar = (cantidad) =>cambiarCuenta(cuenta + cantidad);
    const disminuir = (cantidad) =>cambiarCuenta(cuenta - cantidad);


    return(
        <div>
            <h1>ContadorFuncional: {cuenta}</h1>
            {/*La cantidad numerica de cantidadAIncrementar y cantidadADisminuir está en index.js en la etiqueta contadorFuncional */}
            <Boton negro marginRight onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton negro marginRight onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Boton>
        </div>
    )
}

export default ContadorFuncional;