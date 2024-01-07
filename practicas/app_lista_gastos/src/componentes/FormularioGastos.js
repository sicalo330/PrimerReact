import React,{useState} from "react";
import {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosFormulario'
import Boton from "../elementos/Boton";
import { ReactComponent as IconoAgregar } from "./../imagenes/agregar.svg";
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";


const FormularioGastos = () => {
    const [inputDescripcion, cambiarDescripcion] = useState('');
    const [inputCantidad, cambiarCantidad] = useState('');
    const [categoria, cambiarCategoria] = useState('Hogar')
    const [fecha,cambiarFecha] = useState(new Date())

    const handleChange = (e) => {
        if(e.target.name === 'descripcion'){
            cambiarDescripcion(e.target.value);
        }
        else if(e.target.name === 'valor'){
            //Lo de replace hace que el usuario no pueda escribir palabras en el input de cantidad
            cambiarCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    return (
        <Formulario>
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
                    Agregar gasto <IconoAgregar />
                </Boton>
            </ContenedorBoton>
        </Formulario>
    );
}

export default FormularioGastos;
