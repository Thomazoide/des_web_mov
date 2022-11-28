import React from "react";
import { Header } from './Header';
import axios, { formToJSON } from "axios"
import './Agendar.css';
import { useNavigate } from "react-router-dom";


function Agendar(){
    const navigate = useNavigate();
    const [rutSos, setRutSos] = React.useState('')
    const [fecha, setFecha] = React.useState('')
    const [hora, setHora] = React.useState('')
    const [rutPac, setRutPac] = React.useState('')
    const [esp, setEsp] = React.useState('')
    const [cod, setCod] = React.useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/api/reservas', {
            'fecha': fecha,
            'hora': hora,
            'rutSostenedor': rutSos,
            'rutPaciente': rutPac,
            'especialidad': esp,
            'codSede': cod,
        })
    }
    return(
        <div className="interfaz-agendar">
            <Header/>
            <div className="pantalla-agendar">
                <a className="titulo-agendar">Agende su hora con nosotros</a>
                <form className="formulario" onSubmit={handleSubmit}>
                    <a className="texto">Rut sostenedor</a>
                    <input className="tinp" type='text' placeholder="Ingrese RUT" onChange={(e)=>setRutSos(e.target.value)}></input>
                    <a className="texto">Rut paciente</a>
                    <input className="tinp" type='text' placeholder="Ingrese RUT" onChange={(e)=>setRutPac(e.target.value)}></input>
                    <a className="texto">Seleccione fecha</a>
                    <input className="fecha" type="date" min="2022-11-07" max="2022-12-31" onChange={(e)=>setFecha(e.target.value)}></input>
                    <a className="texto">Elija la hora</a>
                    <input className="hora" type="time" onChange={(e)=>setHora(e.target.value)}></input>
                    <a className="texto">Seleccione sede</a>
                    <select className="lista" onChange={(e)=> setCod(e.target.value)} required>
                        <option value='edd_sb'>San Bernardo, Santiago</option>
                        <option value='edd_prov'>Providencia, Santiago</option>
                        <option value='edd_t'>Temuco</option>
                        <option value='edd_ls'>La Serena</option>
                    </select>
                    <a className="texto">Ingrese especialidad</a>
                    <select className="lista" onChange={(e)=>setEsp(e.target.value)}>
                        <option>Fonoaudología</option>
                        <option>Kinesiología</option>
                        <option>Terapia ocupacional</option>
                        <option>Educación diferencial</option>
                        <option>Psicología</option>
                        <option>Medicina general</option>
                    </select>
                    <button className="boton" type="submit" onClick={console.log(rutSos, fecha, hora, rutPac, esp, cod)}>Agendar mi hora</button>
                </form>
            </div>
        </div>
    );
}
export default Agendar;