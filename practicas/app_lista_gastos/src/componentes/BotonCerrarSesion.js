import React from "react";
import Boton from "../elementos/Boton";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const BotonCerrarSesion = () => {
    const navigate = useNavigate();

    const cerrarSesion = async () => {
        try{
            await signOut(auth);
            navigate('/iniciarSesion')
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <Boton as="button" onClick={cerrarSesion}>
            Cerrar sesión
        </Boton>
    );
}

export default BotonCerrarSesion;

