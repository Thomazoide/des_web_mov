import React from "react";
import {Header} from './Header'
import axios from 'axios'
import './conocerEquipo.css';
import usrPic from './user_pic.ico'

export default class ConocerEquipo extends React.Component {
    
    state = {
        medics: [],
    }

    async componentDidMount(){
        const arreglo = await axios.get('http://localhost:4000/api/medics')
        this.setState({medics: arreglo.data})
        console.log(arreglo)
    }
    
    render(){
        return(
            <div className="cuerpo">
                <Header/>
                <div className="contenido-e">
                    <div className="medicos">
                        <ul className="lista-medicos">
                            {
                                this.state.medics.map(med => <li className="medic">
                                    <span className="pic-container"><img src={usrPic} className="user-pic"/></span>
                                    <p className="elemento">Especialidad: {med.tipo}</p>
                                    <p className="elemento">Nombre: {med.nombre}</p>
                                    <p className="elemento">Correo electrónico: {med.email}</p>
                                    <p className="elemento">Rut: {med.rut}</p>
                                    
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
