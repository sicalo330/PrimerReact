import React,{useState, useEffect} from "react";
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosFormulario'
import Boton from "../elementos/Boton";
import { ReactComponent as IconoAgregar } from "./../imagenes/agregar.svg";
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";
import agregarGasto from "../firebase/agregarGastos";
import { fromUnixTime, getUnixTime } from "date-fns";
import {useAuth} from './../contextos/AuthContext'
import Alerta from "../elementos/Elementos.js";
import { useNavigate } from "react-router-dom";
import editarGasto from "../firebase/editarGasto.js";


const FormularioGastos = ({gasto}) => {
    const [inputDescripcion, cambiarDescripcion] = useState('');
    const [inputCantidad, cambiarCantidad] = useState('');
    const [categoria, cambiarCategoria] = useState('casa')
    const [fecha,cambiarFecha] = useState(new Date())
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
    const [alerta,cambiarAlerta] = useState('')
    const {usuario} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        //Comprobar si hay algún gasto
        //De ser así establecemos todo el state con los valores del gasto
        if(gasto){
            //Comprobamos que el gasto sea del usuario
            if(gasto.data().uidUsuario === usuario.uid){
                cambiarCategoria(gasto.data().categoria)
                cambiarFecha(fromUnixTime(gasto.data().fecha))
                cambiarDescripcion(gasto.data().descripcion)
                cambiarCantidad(gasto.data().cantidad)
            }
            else{
                navigate('/listaGastos')
            }
        }
    },[gasto, usuario,navigate]);

    const handleChange = (e) => {
        if(e.target.name === 'descripcion'){
            cambiarDescripcion(e.target.value);
        }
        else if(e.target.name === 'valor'){
            //Lo de replace hace que el usuario no pueda escribir palabras en el input de cantidad
            cambiarCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let cantidad = parseFloat(inputCantidad).toFixed(2)

        if(inputDescripcion !== '' && inputCantidad !== ''){
            if(cantidad){
                if(gasto){
                    editarGasto({
                        id:gasto.id,
                        categoria:categoria,
                        descripcion:inputDescripcion,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha)
                    }).then(() => {
                        navigate('/listaGastos')
                    }).catch((error) => {
                        console.log(error)
                    });
                }
                else{
                    agregarGasto({
                        categoria:categoria,
                        descripcion:inputDescripcion,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha),
                        uidUsuario:usuario.uid
                    })
                    .then(() => {
                        cambiarEstadoAlerta('Casa')
                        cambiarDescripcion('')
                        cambiarCantidad('')
                        cambiarFecha(new Date())

                        cambiarEstadoAlerta(true);
                        cambiarAlerta({
                            tipo:'exito',
                            mensaje:'Datos ingresados'
                        })
                    })
                    .catch((error) => {
                        cambiarEstadoAlerta(true);
                        cambiarAlerta({
                            tipo:'error',
                            mensaje:'Hubo un problema al ingresar los datos, fue esto' + error
                        })
                    })
                }

            }
            else{
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                    tipo:'error',
                    mensaje:'Por favor rellene los campos'
                })
            }
        }
        else{
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo:'error',
                mensaje:'Por favor rellene todos los campos'
            })
        }

    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias
                    categoria={categoria}
                    cambiarCategoria={cambiarCategoria}

                />
                <DatePicker
                fecha={fecha}
                cambiarFecha={cambiarFecha}
                />
            </ContenedorFiltros>
            <div>
                <Input
                    type="text"
                    name="descripcion"
                    id="descripcion"
                    placeholder="Descripción del gasto"
                    value={inputDescripcion}
                    onChange={handleChange}
                />
                <InputGrande
                    type="text"
                    name="valor"
                    id="valor"
                    placeholder="$0.00"
                    value={inputCantidad}
                    onChange={handleChange}
                />
            </div>
            <ContenedorBoton>
                <Boton as='button' primario conIcono type="submit">
                    {gasto ? 'Editar gasto' : 'Agregar gasto'}<IconoAgregar />
                </Boton>
            </ContenedorBoton>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </Formulario>
    );
}

export default FormularioGastos;
