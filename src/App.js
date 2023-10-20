import './App.css';
import Testimonio from './componentes/testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Estos es lo que dicen nuestros alumnos sobre react:</h1>
        <Testimonio
        nombre="Shawn Wang"
        pais="Singapore"
        imagen="Shawn"
        cargo="Ingeniero de software"
        empresa="Amazon"
        testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life" />
        <Testimonio
        nombre="Sarah Chima"
        pais="Nigeria"
        imagen="Sarah"
        cargo="Ingeniera de software"
        empresa="ChatDesk"
        testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." />
        <Testimonio
        nombre = "Emma Bostian"
        pais="Suecia"
        imagen="Emma"
        cargo="Ingeniera de software"
        empresa="Spotify"
        testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify" />
      </div>
    </div>
  );
}

export default App;
