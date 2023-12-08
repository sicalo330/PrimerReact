import React from "react";
import Tarea from './Tarea.js'

const Lista = ({tareas}) => {
    return(
        <ul className="lista-tareas">
            {//Si no hay tareas devolverá un mensaje
            tareas.length > 0 ? tareas.map((tarea) => {//map itera en el array llamado tareas y recibe un parametro para acceder a ellas, el parametro puede tener cualquier nombre
                return <Tarea
                        key={tarea.id}
                        tarea={tarea}
                         />
            })
            :
            <div className="lista-tareas__mensaje">
                No hay tareas agregadas
            </div>
            }
        </ul>
    );
}

export default Lista;