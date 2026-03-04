import React from 'react';
import '../styles/cert.css';
import { 
    SiGooglecloud, 
    SiAmazon, 
    SiOracle, 
    SiCoursera, 
    SiUdemy,
} from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

function Certificaciones() {
    const certificaciones = [
    { titulo: "Google Data Analytics Professional Certificate", emisor: "Google / Coursera", fecha: "2026", year: 2026, month: 12, icono: <SiCoursera className="cert-icon google" /> },
    { titulo: "SQL TOTAL - Domina Bases de Datos de 0 a Avanzado en 12 Días", emisor: "Udemy", fecha: "Marzo 2026", year: 2026, month: 3, icono: <SiUdemy className="cert-icon udemy" /> },
    { titulo: "SQL (Basic)", emisor: "HackerRank", fecha: "Marzo 2026", year: 2026, month: 3, icono: <FaHackerrank className="cert-icon hackerrank" /> },
    { titulo: "Fundamentos y Lógica de Programación para Principiantes", emisor: "Udemy", fecha: "Febrero 2026", year: 2026, month: 2, icono: <SiUdemy className="cert-icon udemy" /> },
    { titulo: "Data Visualization with Python", emisor: "IBM / Cognitive Class", fecha: "Julio 2021", year: 2021, month: 7, icono: <span className="icon">🏦</span> },
    { titulo: "Introducción a las Habilidades Digitales", emisor: "Santander / ANUIES", fecha: "2021", year: 2021, month: 1, icono: <span className="icon">🏦</span> },
    { titulo: "Introducción a la Minería de Datos", emisor: "UC Chile / Coursera", fecha: "Julio 2021", year: 2021, month: 7, icono: <SiCoursera className="cert-icon chile" /> },
    { titulo: "Exploring and Preparing your Data with BigQuery", emisor: "Google Cloud", fecha: "Junio 2021", year: 2021, month: 6, icono: <SiGooglecloud className="cert-icon google" /> },
    { titulo: "Applying Machine Learning to your Data with GCP", emisor: "Google Cloud", fecha: "Julio 2021", year: 2021, month: 7, icono: <SiGooglecloud className="cert-icon google" /> },
    { titulo: "Amazon Marketing Cloud", emisor: "Amazon", fecha: "2025", year: 2025, month: 1, icono: <SiAmazon className="cert-icon amazon" /> },
    { titulo: "Introducción a SQL con MySQL", emisor: "Oracle / ONE", fecha: "2023", year: 2023, month: 1, icono: <SiOracle className="cert-icon oracle" /> }
];


    const certificacionesOrdenadas = [...certificaciones].sort((a, b) => {
        if (b.year !== a.year) {
            return b.year - a.year; 
        }
        return b.month - a.month; 
    });

    return (
        <div className="container_certificaciones">
            <div className="cert_grid">
                {certificacionesOrdenadas.map((cert, index) => (
                    <div key={index} className="cert_card">
                        <div className="cert_icon_container">
                            {cert.icono}
                        </div>
                        <div className="cert_info">
                            <h4>{cert.titulo}</h4>
                            <p>{cert.emisor} | <span>{cert.fecha}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { Certificaciones };