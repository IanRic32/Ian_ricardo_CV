import React, { useState } from 'react';
import { SiKaggle } from "react-icons/si";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import '../nav.css';

function Navegacion() { 
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navegacion">
            <div className='nav_icon' onClick={toggleMenu}>
                {isOpen ? <FaTimes color="white" /> : <FaBars color="white" />}
            </div>

            <ul className={`nav_links ${isOpen ? "open" : ""}`}>
                <li><a href="https://github.com/IanRic32?tab=repositories" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li><a href="https://mercartfront.vercel.app/" target="_blank" rel="noreferrer">MERCART</a></li>
                <li><a href="https://testigos-haleon.vercel.app/" target="_blank" rel="noreferrer">Haleon</a></li>
                <li><a href="https://www.kaggle.com/rivi03"><SiKaggle /></a></li>
                <li><a href="https://www.linkedin.com/in/ian-ricardo-rios-velazquez" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
            </ul>
        </nav>
    );
}

export { Navegacion };