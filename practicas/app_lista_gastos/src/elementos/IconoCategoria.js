import React from "react";
import {ReactComponent as IconoComida} from './../imagenes/comida.svg'
import {ReactComponent as IconoCompras} from './../imagenes/compras.svg'
import {ReactComponent as IconoPagos} from './../imagenes/pagos.svg'
import {ReactComponent as IconoPersonal} from './../imagenes/personal.svg'
import {ReactComponent as IconoCasa} from './../imagenes/casa.svg'
import {ReactComponent as IconoRopa} from './../imagenes/ropa.svg'
import {ReactComponent as IconoSalud} from './../imagenes/salud.svg'
import {ReactComponent as IconoTransporte} from './../imagenes/transporte.svg'

const IconoCategoria = ({nombre}) => {
    switch(nombre){
        case 'comida':
            return <IconoComida />
        case 'compras':
            return <IconoCompras />
        case 'cuentasPagos':
            return <IconoPagos />
        case 'personal':
            return <IconoPersonal />
        case 'casa':
            return <IconoCasa />
        case 'ropa':
            return <IconoRopa />
        case 'saludHigiene':
            return <IconoSalud />
        case 'transporte':
            return <IconoTransporte />
        default:
            break;

    }
}

export default IconoCategoria;