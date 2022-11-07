import React, { Component, useState, useEffect } from 'react'
import { Header } from './Header';
import './Login.css';
import { getUsers } from './firebase';
import { useNavigate } from 'react-router-dom';
import UICONTROL from './UICONTROL';

function Login(){

    
    const navigate = useNavigate();

    const rutearPC = () => {
        console.log("Ruteando al Panel de control...")
        navigate("/UICONTROL")
    }



    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
        var iniciarSesion = async () => {
            const querySnapshot = await getUsers();
            querySnapshot.forEach(doc => {
                const datos = doc.data();
                if (usuario == datos.ID && password == datos.password) {
                    console.log("usuario existe")
                    console.log("Generando Acceso [Nombre="+datos.nombre+" [ID="+datos.ID+"] [Cargo=["+datos.funcion+"]")
                    window.alert("Haz iniciado sesion")
                    Login.global = {
                        usuario: datos
                      };
                    rutearPC()
                }else{
                    console.log("usuario no existe")
                }
            })
        }
        return (
            
            <div className='interfaz-login'><Header/>
                <div className='pantalla-login'>
                    <a className='titulo-login'>Sistema de Login 1.0.1</a>
                    <form className='formulario'>
                        <a className="text-user">Numero de identificacion</a>
                        <input name='username' className='input-user' type="text" placeholder="Ingresar RUT" onChange={event => setUsuario(event.target.value)}></input>
                        <a className="text-pass">Contraseña</a>
                        <input name='password' className='input-pass' type="password" placeholder="Ingresar Contraseña" onChange={event => setPassword(event.target.value)}></input>
                        
                    </form>
                    <button onClick={iniciarSesion} className="iniciar-sesion">Iniciar sesion</button>
                        <button className="no-password">Olvide mi contraseña</button>
                
                </div>
            </div>
            
        )}



export default Login;