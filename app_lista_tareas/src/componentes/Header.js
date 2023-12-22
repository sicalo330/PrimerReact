import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const header = ({mostrarCompletadas,cambiarMostrarCompletadas}) => {
    const toggleCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas)
    }

    return(
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>
            {mostrarCompletadas ?
                    <button
                    className="header__boton"
                    onClick={() => toggleCompletadas()}
                    >
                        No mostrar completadas
                        <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton"/>
                    </button>
            :
                    <button
                    className="header__boton"
                    onClick={() => toggleCompletadas()}
            >
                        Mostrar completadas
                    <FontAwesomeIcon icon={faEye} className="header__icono-boton"/>
                </button>
            }
        </header>
    );
}

export default header;