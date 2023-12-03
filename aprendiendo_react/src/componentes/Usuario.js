import React from "react";
import styled from 'styled-components'

const Usuario = () =>{
  const nombre = ' carlos';
    const pais = 'Colombia';
    const amigos = ['Nuri', 'Fiore','Yo']
    const color = 'red'
    return(
      <div>
          <h1 className='titulo'style={{color:color}}>Hola mundo{nombre}</h1>
            {pais && <p>Que tengas buen día, tu eres de {pais}</p>}
            < Parrafo>Esta es tu lista de amigos</Parrafo>
          <ul>
            {amigos.map((amigo, naranjas) =>  <Lista key={naranjas}>{amigo}</Lista>)}
          </ul>
          <Parrafo>Que tengas un buen día</Parrafo>
      </div>
    );
  }

const Parrafo = styled.p`
  margin: 20px 0;
`;

const Lista = styled.li`
  list-style:none;
  line-height:30px;
`;

export default Usuario;