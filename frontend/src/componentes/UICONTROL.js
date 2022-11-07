import React, { createElement } from 'react'
import { ReactDOM } from 'react-dom';
import { Header } from './Header';
import './UICONTROL.css';
import Login from './Login';

const UICONTROL = (props) => {
    const text_ID = "Identificacion ["+Login.global.usuario.ID+"] Usuario ["+Login.global.usuario.nombre+"]";
    return (
        <div className='interfaz-control'><Header/>
            <div className='pantalla-control' id='pantalla-control'>
                <a className='titulo-control'>INTERFAZ DE CONTROL</a>
                <a id='p' className='titulo-ID'>{text_ID}</a>
                <script>
                
            </script>
            </div>
            
        </div>
    
    )
    

}
export default UICONTROL;