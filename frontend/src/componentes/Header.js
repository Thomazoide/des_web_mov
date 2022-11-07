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
        <button onClick={ toggleMenu } className="Cabecera-button">
            <svg className={ `Cabecera-svg ${ menu ? 'isActive' : '' }`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </button>
        <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }`}>
            <ul className="Cabecera-ul">
                <li className="Cabecera-li"><a onClick={rutearHome} className="Cabecera-a">Home</a></li>
                <li className="Cabecera-li"><a onClick={ruteoAgendar} className="Cabecera-a">Agendar Box</a></li>
                <li className="Cabecera-li"><a onClick={rutearInfoBox} className="Cabecera-a">Informacion Box</a></li>
                <li className="Cabecera-li"><a href="" className="Cabecera-a">Insumos</a></li>
                <li className="Cabecera-li"><a onClick={rutearLogin} className="Cabecera-a">Login</a></li>
            </ul>
        </nav>
    </header>
  )
}