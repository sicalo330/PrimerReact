import React from 'react'
import '../hojasEstilo/testimonio.css'

function Testimonio(props){ //Esto es para volver más dinámico el texto estático de react
  return(
    <div className='contenedor-testimonio'>
      <img
      className='imagen-testimonio'
      src={require(`../imagenes/${props.imagen}.png`)} alt={props.nombre}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
         <strong>{props.nombre}</strong> en {props.pais} </p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio