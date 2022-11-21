import React from "react";
import { Header } from './Header';
import './Agendar.css';
import { useNavigate } from "react-router-dom";


function Agendar(){
    const navigate = useNavigate();
    return(
        <div className="interfaz-agendar">
            <Header/>
            <div className="pantalla-agendar">
                <a className="titulo-agendar">Agende su hora con nosotros</a>
                <form className="formulario">
                    <a className="texto">Rut sostenedor</a>
                    <input className="tinp" type='text' placeholder="Ingrese RUT"></input>
                    <a className="texto">Rut paciente</a>
                    <input className="tinp" type='text' placeholder="Ingrese RUT"></input>
                    <a className="texto">Seleccione fecha</a>
                    <input className="fecha" type="date" min="2022-11-07" max="2022-12-31"></input>
                    <a className="texto">Seleccione sede</a>
                    <select className="lista">
                        <option>San Bernardo, Santiago</option>
                        <option>Providencia, Santiago</option>
                        <option>Temuco</option>
                        <option>La Serena</option>
                    </select>
                    <a className="texto">Ingrese especialidad</a>
                    <select className="lista">
                        <option>Fonoaudología</option>
                        <option>Kinesiología</option>
                        <option>Terapia ocupacional</option>
                        <option>Educación diferencial</option>
                        <option>Psicología</option>
                        <option>Medicina general</option>
                    </select>
                </form>
                <button className="boton">Agendar mi hora</button>
            </div>
        </div>
    );
}
export default Agendar;