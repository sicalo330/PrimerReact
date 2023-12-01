import React,{useState} from "react";

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
        <form action="" onSubmit={onSubmit}>
            <p>Usuario:{usuario}</p>
            <p>Contraseña:{password}</p>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input
                    type="text"
                    name="usuario"
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={onChange}
                />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export {FormularioInicioSesion};