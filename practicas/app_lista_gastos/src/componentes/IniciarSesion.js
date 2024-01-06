import React,{useState} from "react";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import Boton from "../elementos/Boton";
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosFormulario.js'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import Alerta from "../elementos/Elementos.js";

const IniciarSesion = ({primario}) => {
    const navigate = useNavigate();

    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    //cambiarEstadoAlerta es un booleano que define si el mensaje que voy a proporcionar es falso o verdadero, y también define el color de la alerta
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
    //cambiarAlerta a diferencia del anterior sería el mensaje en sí, por eso está inicializado como un aray vacío, y si algún error es detectado, se debe usar
    //cambiarAlerta para cambiar el mensaje de error
    const [alerta,cambiarAlerta] = useState({})

    const handleChange = (e) =>{
        if(e.target.name === "email"){
            establecerCorreo(e.target.value)
        }
        else if(e.target.name === "password"){
            establecerPassword(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo)){
            cambiarEstadoAlerta(true)
            cambiarAlerta({
                tipo:'error',
                mensaje:"Algún campo no es válido"
            })
            return;
        }
        if(correo === '' || password === ''){
            cambiarEstadoAlerta(true)
            cambiarAlerta({
                tipo:'error',
                mensaje:"Por favor rellene los datos"
            })
            return;
        }

        try{
            await signInWithEmailAndPassword(auth,correo,password);
            navigate('/');
        }
        catch(error){
            cambiarEstadoAlerta(true)
            console.log(error)
            let mensaje
            switch (error.code) {
                case 'auth/invalid-credential':
                    mensaje = "Campos incorrectos"
                    break;

                default:
                    mensaje = "Hubo un error al intentar crear la cuenta";
                    // Agrega un caso para manejar errores desconocidos
                    break;
            }
                cambiarAlerta({
                    tipo:"error",
                    mensaje:mensaje
                })
        }


    }


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
            <ContenedorBoton>
                <Boton as="button" type="submit">Iniciar Sesion</Boton>
            </ContenedorBoton>
        </Formulario>
        <Alerta
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}
        />
    </>
     );
}

export default IniciarSesion;