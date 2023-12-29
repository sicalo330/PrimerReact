import React, {useContext} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from "./components/Inicio.js";
import Blog from "./components/Blog.js";
import AcercaDe from "./components/AcercaDe.js";
import Header from "./components/Header.js";
import styled from 'styled-components'
import Post from "./components/Post.js";
import Error404 from "./components/Error404.js";
import { ContextoTema } from "./contextos/contextoTema.js";

const App = () => {
  const {tema} = useContext(ContextoTema)

  return(
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main tema={tema}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="/acercaDe" element={<AcercaDe />} />
          </Routes>
        </Main>
    </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 120%;
  max-width: 700px;
`;

const Main = styled.main`
  font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'};
  text-align:${props => props.tema ? props.tema.alineado : 'right'};
  display:flex;
  background: #fff;
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1)
`;

export default App;