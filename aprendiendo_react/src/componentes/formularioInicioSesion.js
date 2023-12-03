import React,{useState} from "react";
import styles from './formularioInicioSesion.module.css'
import Boton from "./elementos/Boton.js";

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');
    const onChange = (e) => {
        if(e.target.name === "usuario"){
            cambiarUsuario(e.target.value)
        }
        else if(e.target.name === "password"){
            cambiarPassword(e.target.value)
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        //El número se pone entre comillas porque el label solo admite Strings
        if(usuario === 'carlos' && password === '123'){
            props.cambiarEstadoSesion(true)
        }
        else{
            alert("Datos incorrectos")
            cambiarPassword('')
            cambiarUsuario('')
        }
    }

    return(
        <form action="" onSubmit={onSubmit} className={styles.formulario}>
            <h1>No has iniciado sesión</h1>
            <div>
                <label htmlFor="usuario" className={styles.label}>Usuario</label>
                <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className={styles.input}
                    />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={onChange}
                className={styles.input}
                />
            </div>
            <Boton largo type="submit">Iniciar sesión</Boton>
        </form>
    );
}

export {FormularioInicioSesion};