import React from "react";
import { ReactComponent as Puntos } from "../imagenes/puntos.svg"; // Assuming Puntos is an SVG image
import styled from "styled-components";

const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135, 182, 194, 0.15);
    }
`;

const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: -2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
    width:15%;
`;

const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: -2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
    width:15%;
`;

const Fondo = () => (
    <>
        <PuntosArriba />
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
            fillOpacity="1"
            d="M0,192L60,165.3C120,139,240,85,360,80C480,75,600,117,720,154.7C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
            </path>
        </Svg>
        <PuntosAbajo />
    </>
);

export default Fondo;
