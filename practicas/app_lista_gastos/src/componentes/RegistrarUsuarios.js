import React,{useState} from "react";
import { Header, Titulo, ContenedorHeader } from "../elementos/Header";
import Boton from "../elementos/Boton";
import {Formulario, Input, ContenedorBoton} from '../elementos/ElementosFormulario.js'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase/firebaseConfig.js";
import { useNavigate } from "react-router-dom";
import Alerta from "../elementos/Elementos.js";

const RegistroUsuarios = ({primario}) => {
    const navigate = useNavigate();

    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [password2, establecerPassword2] = useState('')
    //cambiarEstadoAlerta es un booleano que define si el mensaje que voy a proporcionar es falso o verdadero, y también define el color de la alerta
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
    //cambiarAlerta a diferencia del anterior sería el mensaje en sí, por eso está inicializado como un aray vacío, y si algún error es detectado, se debe usar
    //cambiarAlerta para cambiar el mensaje de error
    const [alerta,cambiarAlerta] = useState({})

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
        if(correo === '' || password === ''|| password2===''){
            cambiarEstadoAlerta(true)
            cambiarAlerta({
                tipo:'error',
                mensaje:"Por favor rellene los datos"
            })
            return;
        }
        if(password !== password2){
            cambiarEstadoAlerta(true)
            cambiarAlerta({
                tipo:'error',
                mensaje:"Las dos contraseñas deben ser iguales"
            })
            return;
        }

        try{
            await createUserWithEmailAndPassword(auth,correo,password);
            navigate('/')
        }
        catch(error){
            cambiarEstadoAlerta(true)
            let mensaje
            switch (error.code) {
                case 'auth/weak-password':
                    mensaje = "La contraseña debe tener al menos 6 caracteres";
                    break;
                case 'auth/email-already-in-use':
                    mensaje = "Ya existe una cuenta con este correo electrónico";
                    break;
                case 'auth/invalid-email':
                    mensaje = "El correo electrónico no es válido";
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
            {/*tipo proporciona el color que va a tener la alerta (Ver theme.js) y el mensaje es lo que se va a mostrar*/}
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </>
     );
}

export default RegistroUsuarios;