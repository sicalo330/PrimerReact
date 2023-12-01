import React, { Component } from 'react'

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = {contador: 0}
    }

    componentDidMount(){
        console.log('el componente se cargó en el DOM')
    }

    componentDidUpdate(propiedadesAnteriores,estadoAnterior){//Menciona cuando un componente se actualizó, por ejemplo al darle click a incrementar op dismonuir, usar npm start para evidenciar
        console.log('el componente se actualizó')
        console.log('Propiedades anteriores: ', propiedadesAnteriores)
        console.log('Estado anteriore: ', estadoAnterior)
    }

    componentWillUnmount(){//Hace algo cuando un componenete se cierra, por ejemplo cerrar sesión
        console.log('Adiós componenet')
    }

    incrementar(cantidad){
        this.setState((estadoAnterior) => {
            return{
                contador: estadoAnterior.contador + cantidad
            }
        })
    }
    disminuir(cantidad){
        this.setState((estadoAnterior) => {
            return{
                contador: estadoAnterior.contador - cantidad
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={() => this.incrementar(this.props.cantidadAIncrementar)}>Incrementar</button>
                <button onClick={() => this.disminuir(this.props.cantidadADisminuir)}>Disminuir</button>
            </div>
        );
    }
}

export default Contador;
