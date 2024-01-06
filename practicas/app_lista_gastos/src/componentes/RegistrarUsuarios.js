import React,{useState} from "react";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import Boton from "../elementos/Boton";
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosFormulario.js'

const RegistroUsuarios = ({primario}) => {
    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [password2, establecerPassword2] = useState('')

    const handleChange = (e) =>{
        switch(e.target.name){
            case 'email':
                establecerCorreo(e.target.value)
                break;
            case 'password':
                establecerPassword(e.target.value)
                break;
            case 'password2':
                establecerPassword2(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(correo,password,password2)

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo)){
            console.log("El correo no es válido")
            return;
        }
        if(correo === '' || password === ''|| password2===''){
            console.log("Por favor rellene los datos")
            return;
        }
        if(password !== password2){
            console.log("Las dos contraseñas deben ser iguales")
            return;
        }

        console.log("Usuario registrado")
    }

    return (
        <>
            <Header>
                <ContenedorHeader>
                    <Titulo>Crear cuenta</Titulo>
                    <div>
                        <Boton to="/iniciarSesion">Iniciar sesion</Boton>
                    </div>
                </ContenedorHeader>
            </Header>
            <Formulario onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="correo@corero.com"
                    value={correo}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange}
                />
                <Input
                    type="password"
                    name="password2"
                    placeholder="Repetir contraseña"
                    value={password2}
                    onChange={handleChange}
                />
                <ContenedorBoton>
                    <Boton as="button" primario={primario} type="submit">Iniciar sesión</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
     );
}

export default RegistroUsuarios;