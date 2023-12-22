import React from "react";
import Tarea from './Tarea.js'

const Lista = ({tareas,cambiarTareas, mostrarCompletadas}) => {
    //Lo que es completada y texto son las propiedades que se encuentran en App.js
    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map( (tarea) => {
            if(tarea.id === id){
                //Le digo que encuentre la tarea y que la propiedad completa sea el contrariom,es decir que si es falso se volverá verdadero y viceversa
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map( (tarea) => {
            //Encontramos la tarea que buscamos
            if(tarea.id === id){
                //Sobreescribimos texto en el nuevo texto que recibe editarTarea
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
        }));
    }

    const borrarTarea = (id) =>{
        cambiarTareas(tareas.filter((tarea) => {
            //Encontramos la tarea que buscamos
            if(tarea.id !== id){
                //Sobreescribimos texto en el nuevo texto que recibe editarTarea
                return tarea
            }
            return;
        }));
    }

    return(
        <ul className="lista-tareas">
            {//Si no hay tareas devolverá un mensaje
            tareas.length > 0 ? tareas.map((tarea) => {//map itera en el array llamado tareas y recibe un parametro para acceder a ellas, el parametro puede tener cualquier nombre
                if(mostrarCompletadas){
                    return <Tarea
                    key={tarea.id}
                    tarea={tarea}
                    toggleCompletada={toggleCompletada}
                    editarTarea={editarTarea}
                    borrarTarea={borrarTarea}
                     />
                }
                else if(tarea.completada === false){
                    return <Tarea
                    key={tarea.id}
                    tarea={tarea}
                    toggleCompletada={toggleCompletada}
                    editarTarea={editarTarea}
                    borrarTarea={borrarTarea}
                     />
                }
                return;
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