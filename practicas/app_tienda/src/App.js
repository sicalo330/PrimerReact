import React, { useState } from 'react'
import styled from 'styled-components'
import {NavLink,Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio.js'
import Blog from './components/Blog.js'
import Tienda from './components/Tienda.js'
import Error404 from './components/Error404.js'
import Carrito from './components/Carrito.js'

const App = () => {

  const productos = [
    {
        id:1,
        nombre:'producto 1'
    },
    {
        id:2,
        nombre:'producto 2'
    },
    {
        id:3,
        nombre:'producto 3'
    },
    {
        id:4,
        nombre:'producto 4'
    }
];

  const [carrito,cambiarCarrito] = useState([]);

  const agregarProductoAlCarrito = (idProducto, nombre) =>{
    if(carrito.length === 0){
      cambiarCarrito([{id:idProducto, nombre:nombre, cantidad:1}])
    }
    else{
      //Se hace una copia del array
      const nuevoCarrito = [...carrito]

      //Comprueba si está o no en el carrito (True or false)
      //Si aún no está en el carrito dará false(ver el else que está debajo del if que sigue)
      const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito) => {
        return productoDeCarrito.id === idProducto
      }).length > 0;

      //Si ya tiene el producto entonces lo tenemos que actualizar
      if(yaEstaEnCarrito){
        //Para ello tenemos que buscarlo, obtener sus valores y reemplazarlos para actualizarlos, en este caso se incrementa la variable cantidad por cada clic que se hace
        nuevoCarrito.forEach((productoDeCarrito, index) => {
          if(productoDeCarrito.id === idProducto){
            const cantidad = nuevoCarrito[index].cantidad;
            nuevoCarrito[index] = {
              id:idProducto,
              nombre:nombre,
              cantidad:cantidad + 1}
          }
        })
      }
      //Si no hay nada en el carrito se usa push() para agregarlo en el array
      else{
        nuevoCarrito.push(
          {
            id:idProducto,
            nombre:nombre,
            cantidad:1
          }
        );
      }

      cambiarCarrito(nuevoCarrito);

    }
  }

  return(
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tienda"
          element={

          <Tienda
          productos={productos}
          agregarProductoAlCarrito={agregarProductoAlCarrito}
          />

          }
          />
        </Routes>
      </main>
      <aside>
        <Carrito carrito={carrito} />
      </aside>
    </Contenedor>
  );
}

const Contenedor = styled.div`
    max-width: 1000px;
    padding: 40px;
    width: 90%;
    display: grid;
    gap: 20px;
    grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 40px 0;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;

    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }

    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;

export default App;