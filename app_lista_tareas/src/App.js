import React,{useState} from 'react';
import './App.css';
import Header from './componentes/Header.js';
import FormularioTareas from './componentes/FormularioTareas.js';

const App = () => {
  const [tareas,cambiarTareas] = useState(
    [
      {
        id:1,
        texto:"Lavar la ropa",
        completada: false
      },
      {
        id:2,
        texto:"Grabar tutorial",
        completada: false
      }
    ]
    );
  return (
    <div className='contenedor'>
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
}

export default App;
