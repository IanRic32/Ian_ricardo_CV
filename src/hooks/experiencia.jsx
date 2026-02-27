import React from 'react';
import { VscAzureDevops } from "react-icons/vsc";
import { SiGooglecloud, SiPython } from "react-icons/si";
import { FaDatabase, FaChartLine, FaLaptopCode } from "react-icons/fa";
import '../exp.css';

function Experiencia() {
    const empleos = [
        {
            empresa: "Havas Groupe",
            puesto: "Data Analyst Sr Specialist",
            periodo: "Noviembre 2025 - Febrero 2026",
            logros: [
                "Implemente soluciones de automatización con Azure DevOps, reduciendo tiempos operativos.",
                "Diseñe y desarrolle Dashboards estratégicos que integran análisis de competencia y auditorías.",
                "Desarrollé procesos ETL para plataformas como HR Media, Auditsa y Admetricks consumiendo APIs."
            ]
        },
        {
            empresa: "Spark Foundry (Publicis Groupe)",
            puesto: "Coordinador de Datos",
            periodo: "Marzo 2025 - Noviembre 2025",
            logros: [
                "Diseñé e implementé soluciones de BI y dashboards interactivos para KPIs.",
                "Creé aplicaciones web full-stack para la visualización dinámica y automatizada de reportes de competencia.",
                "Realicé auditorías de datos y análisis de competencia utilizando Python, SQL y herramientas de visualización, mejorando la toma de decisiones estratégicas.",
                "Implemente la arquitectura, desarrollo y mantenimiento de la base de datos historica de la cuenta y la competencia, para analisis de serires de tiempo y tendencias de mercado."
            ]
        },
        {
            empresa: "Omnicom Media Groupe",
            puesto: "Analista de Datos & Automatización",
            periodo: "Febrero 2024 - Febrero 2025",
            logros: [
                "Presenté resultados a stakeholders, traduciendo análisis complejos en recomendaciones claras.",
                "Diseñé automatizaciones robustas en Python (.exe) integrando soluciones en entornos SharePoint.",
                "Gestioné el Data Warehouse en Google Cloud Platform (GCP) realizando consultas avanzadas en SQL."
            ]
        }
    ];

    return (
        <div className="container_experiencia">
            {empleos.map((job, index) => (
                <div key={index} className="card_experiencia">
                    <div className="header_exp">
                        <h3>{job.empresa} | <span>{job.puesto}</span></h3>
                        <p className="periodo">{job.periodo}</p>
                    </div>
                    <ul className="lista_logros">
                        {job.logros.map((logro, i) => (
                            <li key={i}>{logro}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export { Experiencia };