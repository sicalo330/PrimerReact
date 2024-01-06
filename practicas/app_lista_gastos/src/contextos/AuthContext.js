import React, { useState, useContext,useEffect } from 'react'
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
//Nota: useEffect comprueba algo cuando ve algún cambio en la página

const AuthContext = React.createContext();

//Hook para acceder al contexto
//Este hook nos permite saber si el usuario está activado o no
const useAuth = () =>{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [usuario,cambiarUsuario] = useState()

    //Se crea un state para saber cuando termina de cargar la comprobacion de onAuthStateChanged
    const [cargando, cambiarCargando] = useState(true)

    //Ejecutará una comprobación una vez
    useEffect(() => {
        //Comprobamos si hay un usuario
        const cancelarSuscripcion = onAuthStateChanged(auth,(usuario) => {
            cambiarUsuario(usuario)
            cambiarCargando(false)
        });

        return cancelarSuscripcion;
    },[])

    return (
        //Si cargando es true, entonces los elemementos hijos no serán mostrados
        //De está forma nos aseguramos de que no se cargue la app hasta que el usuario esté activado
        <AuthContext.Provider value={{usuario: usuario}}>
            {!cargando && children}
        </AuthContext.Provider>

    );
}

export {AuthProvider,AuthContext,useAuth};