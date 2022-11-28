import React from "react";
import {Header} from './Header'
import axios from 'axios'
import './conocerEquipo.css';
import usrPic from './user_pic.ico'

export default class ConocerEquipo extends React.Component {
    
    state = {
        medics: [],
        nurses: [],
        auxs: [],
    }

    async componentDidMount(){
        const arreglo = await axios.get('http://localhost:4000/api/medics')
        const arrNurses = await axios.get('http://localhost:4000/api/nurses')
        const arrAuxs = await axios.get('http://localhost:4000/api/auxiliares')
        this.setState({medics: arreglo.data})
        this.setState({nurses: arrNurses.data})
        this.setState({auxs: arrAuxs.data})
        console.log(arreglo)
    }
    
    render(){
        return(
            <div className="cuerpo">
                <Header/>
                <div className="contenido-e">
                    <div className="medicos">
                        <h3 className="subtitulo">Medicos/as</h3>
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
                    <div className="nurses">
                        <h3 className="subtitulo">Enfermeros/as</h3>
                        <ul className="lista-nurses">
                            {
                                this.state.nurses.map(med => <li className="nurse">
                                    <span className="pic-container"><img src={usrPic} className="user-pic"/></span>
                                    <p className="elemento">Nombre: {med.nombre}</p>
                                    <p className="elemento">Correo electrónico: {med.email}</p>
                                    <p className="elemento">Rut: {med.rut}</p>
                                    
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="auxiliares">
                        <h3 className="subtitulo">Auxiliares</h3>
                        <ul className="lista-auxiliares">
                            {
                                this.state.auxs.map(med => <li className="auxiliar">
                                    <span className="pic-container"><img src={usrPic} className="user-pic"/></span>
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
