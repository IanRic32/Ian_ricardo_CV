import React, {useState} from 'react';
import { SiKaggle} from "react-icons/si";
import {FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import '../nav.css'

function navegacion() {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return( 

        <nav className="navegacion">
            <div className='nav_icon' onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav_links ${isOpen ? "open" : ""}`}>
                <li><a href="https://github.com/IanRic32?tab=repositories"><FaGithub /></a></li>
                <li><a href="https://mercartfront.vercel.app/">MERCART</a></li>
                <li><a href="https://testigos-haleon.vercel.app/">Haleon</a></li>
                <li><a href="#kaggle"><SiKaggle /></a></li>
                <li><a href="https://www.linkedin.com/in/ian-ricardo-rios-velazquez"><FaLinkedin /></a></li>
            </ul>
        </nav>
    );
}
export {navegacion}