import React from "react";
import styled from "styled-components";
import useObtenerArticulos from "../hooks/useObtenerArticulo";

const Blog = () => {
    const [articulos,cargando] = useObtenerArticulos();

    return(
        <ContenedorBlog>
            <Titulo>Blog</Titulo>
            {cargando === true?
            <p>Cargando...</p>
            :
            <div>
            {articulos.map((articulos) => {//Va a ciclar en los arreglos
                return <Articulo key={articulos.id}>{articulos.titulo}</Articulo>//Necesariamente necesitamos hacer un return y neceitamos poner un key
            })}
        </div>
            }
        </ContenedorBlog>
    );
}

const ContenedorBlog = styled.div`
    margin: 40px 0 20px 0;
`

const Titulo = styled.h2`
    margin-bottom: 10px;
`

const Articulo = styled.p`
    padding:10px 0;
    magin-bottom:10px;
    border-bottom: 1px solid #ccc;
`

export default Blog;