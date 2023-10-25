import React from "react";

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