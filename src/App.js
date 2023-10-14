import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estos es lo que dicen nuestros alumnos sobre react:</h1>
        <Testimonio/>
      </div>
    </div>
  );
}

export default App;
