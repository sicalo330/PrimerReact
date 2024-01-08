import {useEffect, useState} from 'react';
import useObtenerGastosMes from './useObtenerGastosMes';

const useObtenerGastosMesCategoria = () => {
    const [gastosCategoria, cambiarGastosCategoria] = useState([])
    const gastos = useObtenerGastosMes()

    useEffect(() => {
        const sumaGastos = gastos.reduce((objetoResultante, objetoActual) => {
            const categoriaActual = objetoActual.categoria
            const cantidadActual = objetoActual.cantidad

            objetoResultante[categoriaActual] += cantidadActual;

            return objetoResultante;
        },{
            'comida': 0,
            'cuentas y pagos': 0,
            'transporte': 0,
            'ropa': 0,
            'salud e higiene': 0,
            'compras': 0,
            'diversion': 0,
            'casa':0
        })

        cambiarGastosCategoria(Object.keys(sumaGastos).map((elemento) => {
            return {categoria:elemento, cantidad:sumaGastos[elemento]}
        }));
    },[cambiarGastosCategoria, gastos]);


    return gastosCategoria;
}

export default useObtenerGastosMesCategoria;