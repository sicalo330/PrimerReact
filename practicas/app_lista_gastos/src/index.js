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
import { AuthProvider } from './contextos/AuthContext';
import RutaPrivada from './componentes/RutaPrivada';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'Sans Serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path='/iniciarSesion' element={<IniciarSesion />}/>
            <Route path='/registrarUsuarios' element={<RegistrarUsuarios />}/>

            <Route path='gastosPorCategoria' element={
              <RutaPrivada>
                <GastosPorCategoria />
              </RutaPrivada>
            } />

            <Route path='listaGastos' element={
              <RutaPrivada>
                <ListaDeGastos />
              </RutaPrivada>
            }/>

            <Route path='editarGastos' element={
              <RutaPrivada>
                <EditarGastos />
              </RutaPrivada>
            }/>

            <Route path='/' element={
              <RutaPrivada>
                  <App />
              </RutaPrivada>
            } />


          </Routes>
        </Contenedor>
      </BrowserRouter>
    </AuthProvider>
    <Fondo />
  </React.StrictMode>
);