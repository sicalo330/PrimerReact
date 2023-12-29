import React, { useState } from "react";

//Creamos el contexto, contexto = estado global
const ContextoTema = React.createContext();

const ProveedorTema = ({children}) => {
    const [ tema,cambiarTema ] = useState( {alineado: 'left',fuente:30} );

    const aumentarFuente = () => { cambiarTema( {...tema,fuente: tema.fuente + 1})}

    const disminuirFuente = () => { cambiarTema( {...tema,fuente: tema.fuente - 1})}

    const moverIzquierda = () => { cambiarTema( {...tema,alineado: 'left'})}
    const moverCentrar = () => { cambiarTema( {...tema,alineado: 'center'})}
    const moverDerecha = () => { cambiarTema( {...tema,alineado: 'right'})}

    return(
        <div>
            <ContextoTema.Provider value={
                {tema,
                aumentarFuente,
                 disminuirFuente,
                 moverIzquierda,
                 moverCentrar,
                 moverDerecha
                 }}>
                {children}
            </ContextoTema.Provider>
        </div>
    );
}

export {ContextoTema,ProveedorTema};