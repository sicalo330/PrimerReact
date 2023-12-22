import React,{useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header.js';
import FormularioTareas from './componentes/FormularioTareas.js';
import ListaTareas from './componentes/ListaTareas.js'

const App = () => {
  const tareasGuardadas = localStorage.getItem('tareas') ?
  JSON.parse(localStorage.getItem('tareas')) : [];
  console.log(tareasGuardadas)
  const [tareas,cambiarTareas] = useState(tareasGuardadas);

    useEffect(() => {
      //Código que se ejecutará cada vez que hay algún cambio en las tareas
      //Lo de local storage es un key y el valor respectivamente(Ver local storage)
      localStorage.setItem('tareas',JSON.stringify(tareas));
    },[tareas]);

    let configMostrarCompletadas = '';

    if(localStorage.getItem('mostrarCompletadas') === null){
      configMostrarCompletadas = true;
    }
    else{
      configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
    }

    //Mostrar completadas es una variable booleana
    const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas)

    useEffect(() => {
      //Nota set item solo almacena variables String
      localStorage.setItem('mostrarCompletadas',mostrarCompletadas.toString());
    },[mostrarCompletadas]);

  return (
    <div className='contenedor'>
      <Header
      mostrarCompletadas={mostrarCompletadas}
      cambiarMostrarCompletadas={cambiarMostrarCompletadas}
        />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
      tareas={tareas}
      cambiarTareas={cambiarTareas}
      mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
