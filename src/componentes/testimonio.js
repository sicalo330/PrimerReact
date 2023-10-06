import React from 'react'

function Testimonio(){
  return(
    <div className='contenedor-testimonio'>
      <img
      className='imagen-testimonio'
      src={require('../imagenes/Logo.png')} alt='Imagen'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Ema Bostian en Suecia</p>
        <p className='Cargo-testimonio'>Ingenierìa de software spotify</p>
        <p className='texto-testimonio'>loresm ipsum</p>
      </div>
    </div>
  );
}

export default Testimonio