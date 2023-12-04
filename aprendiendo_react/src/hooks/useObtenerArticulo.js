import {useState,useEffect} from "react";

const useObtenerArticulos = () => {//Esto no es un componenete porque no estamos retornando un código jsx, esto es un hook
    const [articulos,establecerArticulos] = useState([])
    const [cargando,establecerCargando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            establecerArticulos([
                {
                    id:1,
                    titulo: "Titulo del primer artículo"
                },
                {
                    id:2,
                    titulo: "Titulo del segundo artículo"
                },
                {
                    id:3,
                    titulo: "Titulo del tercer artículo"
                }
            ]);
            //Cuando se cargue la información el cargando será false
            establecerCargando(false)
        }, 3000)//Estos son 3000 milisegundos
    }, []);

    return [articulos, cargando];
}

export default useObtenerArticulos;