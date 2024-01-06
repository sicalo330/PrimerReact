import React from "react";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import Boton from "../elementos/Boton";
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosFormulario.js'

const IniciarSesion = ({primario}) => {
    return (
        <>
        <Header>
            <ContenedorHeader>
                <Titulo>Iniciar sesión</Titulo>
                <div>
                    <Boton to="/registrarUsuarios">Registrarse</Boton>
                </div>
            </ContenedorHeader>
        </Header>
        <Formulario>
            <Input
                type="email"
                name="email"
                placeholder="correo@corero.com"
            />
            <Input
                type="password"
                name="password"
                placeholder="Contraseña"
            />
            <ContenedorBoton>
                <Boton as="button" type="submit">Iniciar Sesion</Boton>
            </ContenedorBoton>
        </Formulario>
    </>
     );
}

export default IniciarSesion;