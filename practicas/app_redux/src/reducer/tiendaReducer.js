const estadoInicial ={
    productos:[
        {
            id:1,
            nombre:'producto A'
        },
        {
            id:2,
            nombre:'producto B'
        },
        {
            id:3,
            nombre:'producto C'
        },
        {
            id:4,
            nombre:'producto D'
        }
    ],
    carrito:[1,2,3]

}

//Pasamos los objetos al parámetro estado
const reducer = (estado = estadoInicial, accion) => {
    return estado;
}

export default reducer