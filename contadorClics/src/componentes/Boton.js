import React from "react";
import '../hojas-de-estilo/boton.css';

function Boton({texto, esBotonDeClic, manejarClic}){//Esto vuelve más dinámico el archivo.js
    return(
      <button
      className={ esBotonDeClic? "boton-clic":"boton-reiniciar" }
      onClick={manejarClic}>
        {texto}
      </button>
    );
}

export default Boton