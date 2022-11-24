import React from 'react'
import { Header } from './Header';
import './Home.css';

function Home() {
    return (
        <body className='interfaz-home'>
            <Header/>          
            <div className='contenido'>
                <h1 className='titulo'>Bienvenido a EduDown</h1>
                <div className='cuadro'>
                    <p className='parrafo'>Contamos con 4 sedes en nuestro pais</p>
                    <div className='cuadro-sedes'>
                        <ul className='sedes'>
                            <li className='sede'>Region de coquimbo, La Serena</li>
                            <li className='sede'>Region metropolitana, Santiago, Providencia</li>
                            <li className='sede'>Region metropolitana, Santiago, San Bernardo</li>
                            <li className='sede'>Region de la araucania, Temuco</li> 
                        </ul>
                    </div>
                </div>
            </div>
        </body>
        
    )
}

export default Home;