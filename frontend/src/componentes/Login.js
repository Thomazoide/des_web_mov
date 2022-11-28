import React, { Component, useState, useEffect } from 'react'
import { Header } from './Header';
import axios from 'axios'
import './Login.css';
import { useNavigate } from 'react-router-dom';


function Login(){

    
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault()
        const arrMed = await axios.get('http://localhost:4000/api/medics')
        const arrNurses = await axios.get('http://localhost:4000/api/nurses')
        const arrAux = await axios.get('http://localhost:4000/api/auxiliares')
        let token = null
        if(!token){            
            for(let objeto of arrMed.data){
                if(usuario === objeto.rut && password === objeto.pass){
                    token = objeto
                }
            }
            for(let objeto of arrNurses.data){
                if(usuario === objeto.rut && password === objeto.pass){
                    token = objeto
                }
            }
            for(let objeto of arrAux.data){
                if(usuario === objeto.rut && password === objeto.pass){
                    token = objeto
                }
            }
        }
    }
        return (
            
            <div className='interfaz-login'><Header/>
                <div className='pantalla-login'>
                    <a className='titulo-login'>Sistema de Login 1.0.1</a>
                    <form className='formulario' onSubmit={onSubmit}>
                        <a className="text-user">Numero de identificacion</a>
                        <input name='username' className='input-user' type="text" placeholder="Ingresar RUT" onChange={event => setUsuario(event.target.value)}></input>
                        <a className="text-pass">Contraseña</a>
                        <input name='password' className='input-pass' type="password" placeholder="Ingresar Contraseña" onChange={event => setPassword(event.target.value)}></input>
                        
                    </form>
                    <button className="iniciar-sesion">Iniciar sesion</button>
                        <button className="no-password">Olvide mi contraseña</button>
                
                </div>
            </div>
            
        )}



export default Login;