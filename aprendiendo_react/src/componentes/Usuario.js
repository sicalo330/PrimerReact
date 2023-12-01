import React from "react";

const Usuario = () =>{
  const nombre = ' carlos';
    const pais = 'Colombia';
    const amigos = ['Nuri', 'Fiore','Yo']
    const color = 'red'
    return(
      <div>
          <h1 className='titulo'style={{color:color}}>Hola mundo{nombre}</h1>
            {pais && <p>Que tengas buen día, tu eres de {pais}</p>}
            <p>Tu lista de amigos es:</p>
          <ul>
            {amigos.map((amigo, naranjas) =>  <li key={naranjas}>{amigo}</li>)}
          </ul>
          <p>Que tengas un buen día</p>
      </div>
    );
  }

export default Usuario;