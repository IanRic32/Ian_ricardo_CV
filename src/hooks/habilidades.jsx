import { IoLogoJavascript } from "react-icons/io";
import { DiTrello, DiSqllite } from "react-icons/di"; // Agrupados
import { RiFileExcel2Fill } from "react-icons/ri";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { SiTypescript,SiGooglecloud } from "react-icons/si";

import { 
    FaPython, 
    FaReact, 
    FaGithub, 
    FaGitAlt, 
    FaHtml5, 
    FaCss3Alt, 
    FaJira 
} from "react-icons/fa";

import '../hab.css'
function Habilidades() {
    return (
        <div className="container_habilidades">
            <ul className="grid-habilidades">
                <li><FaPython className="icon" /> Python (FastApi, Polars, Pandas, Tkinter, OS, Shutil)</li>
                <li><AiOutlineConsoleSql className="icon" /> SQL</li>
                <li><FaGithub className="icon" /> GitHub</li>
                <li><FaGitAlt className="icon" /> Git</li>
                <li><FaHtml5 className="icon" /> HTML</li>
                <li><FaCss3Alt className="icon" /> CSS</li>
                <li><RiFileExcel2Fill className="icon" /> Excel Avanzado</li>
                <li><DiSqllite className="icon" /> Sqlite</li>
                <li><FiFigma className="icon" /> Figma</li>
                <li><DiTrello className="icon" /> Trello</li>
                <li><FaJira className="icon" /> Jira</li>
                <li><FaReact className="icon" /> React</li>
                <li><IoLogoJavascript className="icon" /> Javascript</li>
                <li><SiTypescript className="icon" /> TypeScript</li>
                <li><SiGooglecloud className="icon" /> Google Cloud Platform</li>
                <li><span className="icon">📊</span> Power Query</li>
                <li><span className="icon">📈</span> Power BI</li>
            </ul>
        </div>
    );
}
export {Habilidades}

