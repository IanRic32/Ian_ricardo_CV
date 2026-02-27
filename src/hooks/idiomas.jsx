import React from 'react';
import { GiWorld } from "react-icons/gi"; // Un icono global para idiomas
import '../styles/idiomas.css';

function Idiomas() {
    const listaIdiomas = [
        { nombre: "Español", nivel: "Nativo", clase: "nativo" },
        { nombre: "Inglés", nivel: "Intermedio", clase: "intermedio" },
        { nombre: "Portugués", nivel: "Intermedio", clase: "intermedio" },
        { nombre: "Francés", nivel: "Básico", clase: "basico" }
    ];

    return (
        <div className="container_idiomas">
            <div className="idiomas_grid">
                {listaIdiomas.map((id, index) => (
                    <div key={index} className={`idioma_card ${id.clase}`}>
                        <span className="idioma_nombre">{id.nombre}</span>
                        <span className="idioma_nivel">{id.nivel}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { Idiomas };