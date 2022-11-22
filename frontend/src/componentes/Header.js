import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';

export function Header() {
    const [ menu, setMenu ] = useState( false )

    const toggleMenu = () => {
        console.log(menu)
        setMenu( !menu )
    }

    const navigate = useNavigate();

    const rutearLogin = () => {
        console.log("Hola mundo")
        navigate("/Login")
    }

    const rutearHome = () => {
        console.log("Hola mundo")
        navigate("/Home")
    }

    const ruteoAgendar = () => {
        navigate('/Agendar')
    }

    const rutearInfoBox = () => {
        navigate('/Infobox')
    }

  
  return (
    <header className='Cabecera'>
        <span className="logo-container"><img src="./favicon.ico" className="logo-edudown" onClick={rutearHome} ></img></span>
        <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }`}>
            <ul className="Cabecera-ul">
                <li className="Cabecera-li"><a onClick={ruteoAgendar} className="Cabecera-a">Agendar Box</a></li>
                <li className="Cabecera-li"><a onClick={rutearInfoBox} className="Cabecera-a">Informacion Box</a></li>
                <li className="Cabecera-li"><a href="" className="Cabecera-a">Insumos</a></li>
                <li className="Cabecera-li"><a onClick={rutearLogin} className="Cabecera-a">Iniciar sesión / Registrarse</a></li>
            </ul>
        </nav>
    </header>
  )
}