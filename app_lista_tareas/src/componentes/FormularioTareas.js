import React, {useState} from "react";
import {v4 as uuid4} from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const FormularioTreas = ({tareas, cambiarTareas}) => {
    //Con esto capturamos el valor del input
    const [inputTarea, cambiarInputTarea] = useState('')

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        cambiarTareas([
            ...tareas,//los tres puntos se llamann desestructuración de arrays y permite agregar un array de la variable que está al lado
            {
                id:uuid4(),//Para hacer la id dinámica usé npm install uuid en la carpeta de este proyecto
                texto:inputTarea,
                completada:false
            }
        ]);
        cambiarInputTarea('')
    }
    return(
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input
            type="text"
            className="formulario-tareas__input"
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={(e) => handleInput(e)}
            />
            <button
            type="submit"
            className="formularios-tareas__btn"
            >
                <FontAwesomeIcon
                icon={faPlusSquare}
                className="formulario-tareas__icono-btn" />
            </button>
        </form>
    );
}

export default FormularioTreas;