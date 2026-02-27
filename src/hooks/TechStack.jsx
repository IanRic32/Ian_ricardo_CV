import React from 'react';
import { 
    SiPython, SiFastapi, SiPandas, SiGooglecloud, 
    SiMicrosoftazure, SiMysql, SiSqlite, SiReact, 
    SiJavascript, SiTypescript, SiPowerbi, SiGithub 
} from "react-icons/si";
import { FaDatabase, FaCode, FaCloud } from "react-icons/fa";
import '../styles/techstack.css';

function TechStack() {
    const techCategories = [
        {
            nombre: "Data & Analytics",
            icono: <FaDatabase />,
            skills: [
                { name: "Python (Pandas/Polars)", icon: <SiPython color="#3776AB" /> },
                { name: "SQL (MySQL/SQLite)", icon: <SiMysql color="#4479A1" /> },
                { name: "Power BI / Query", icon: <SiPowerbi color="#F2C811" /> }
            ]
        },
        {
            nombre: "Cloud & DevOps",
            icono: <FaCloud />,
            skills: [
                { name: "Google Cloud (GCP)", icon: <SiGooglecloud color="#4285F4" /> },
                { name: "Azure DevOps", icon: <SiMicrosoftazure color="#0078D4" /> },
                { name: "Git / GitHub", icon: <SiGithub color="#181717" /> }
            ]
        },
        {
            nombre: "Development",
            icono: <FaCode />,
            skills: [
                { name: "FastAPI", icon: <SiFastapi color="#05998B" /> },
                { name: "React", icon: <SiReact color="#61DAFB" /> },
                { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> }
            ]
        }
    ];

    return (
        <section className="tech_stack_section">
            <div className="tech_grid_container">
                {techCategories.map((cat, index) => (
                    <div key={index} className="tech_category_card">
                        <div className="cat_header">
                            {cat.icono}
                            <h3>{cat.nombre}</h3>
                        </div>
                        <div className="skills_pill_container">
                            {cat.skills.map((skill, i) => (
                                <div key={i} className="skill_pill">
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { TechStack };