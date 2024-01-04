import React,{useEffect, useState} from "react";
import styled from "styled-components";
import Contacto from "./Contacto";
import db from "../firebase/firebaseConfig";
import { collection,onSnapshot } from "firebase/firestore";

const ListaContactos = () => {
    const [contactos, cambiarContactos] = useState([]);

    useEffect(() => {
        onSnapshot(
            collection(db,'usuarios'),
            (snapshot) => {
                const arregloUsuarios = snapshot.docs.map((documento) => {
                    return {...documento.data(), id:documento.id}
                })

                cambiarContactos(arregloUsuarios)
            },
            (error) => {
                console.log(error)
            }
            );
    },[]);

    return (
        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto) => (

                <Contacto
                key={contacto.id}
                id={contacto.id}
                nombre={contacto.nombre}
                correo={contacto.correo}
                />
                //return <p key={contacto.id}>{contacto.nombre} - {contacto.correo}</p>
            ))}
        </ContenedorContactos>
     );
}

const ContenedorContactos = styled.div`
    margin-top:40px;

`

export default ListaContactos;