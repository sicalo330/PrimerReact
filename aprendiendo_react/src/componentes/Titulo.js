import React from "react";


/*
const TituloAzul = ({usuario, color}) => {//Podemos extraer directamente las variables
    return(<h1 className="titulo" style={{color:color}}>Hola {usuario}, esto es un titulo azul</h1>);
};

const TituloRojo = (props) => {//Podemos utilizar props para poner la variables a la vista
    const nombre = props.usuario;
    const color = props.color;
    return(<h1 className="titulo" style={{color:color}}>Hola {nombre}, esto es un titulo rojo</h1>);
};

*/
//He reutilizado los dos titulos, ahora es más dinámico
const Titulo = ({usuario = 'usuario', color = 'green'}) => {//No le estoy asignando nada a usuario o a color, estoy diciendo que si no tenemos atributos
    //Estoy diciendo que si no nos dan atributos, debe poner por defecto la palabra usuario y color green
    //Mira index.js el tercer <Titulo />
    return(<h1 className="titulo" style={{color:color}}>Hola {usuario}, esto es un titulo {color} </h1>);
};

//export default Titulo; Este comando se usa para exportar un componente y sólo uno

//El comando de abajo se utiliza para exportar más de un componente
export {Titulo};