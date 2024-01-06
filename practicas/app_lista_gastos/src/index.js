import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import EditarGastos from './componentes/EditarGastos';
import GastosPorCategoria from './componentes/GastosPorCategoria';
import IniciarSesion from './componentes/IniciarSesion';
import ListaDeGastos from './componentes/ListaDeGastos';
import RegistrarUsuarios from './componentes/RegistrarUsuarios';
import Fondo from './elementos/Fondo';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'Sans Serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Contenedor>
        <Routes>
          <Route path='/iniciarSesion' element={<IniciarSesion />}/>
          <Route path='/registrarUsuarios' element={<RegistrarUsuarios />}/>
          <Route path='/listaGastos' element={<ListaDeGastos />}/>
          <Route path='/editarGastos' element={<EditarGastos />}/>
          <Route path='/gastosPorCategoria' element={<GastosPorCategoria />}/>
          <Route path='/' element={ <App />}/>
        </Routes>
      </Contenedor>
    </BrowserRouter>
    <Fondo />
  </React.StrictMode>
);