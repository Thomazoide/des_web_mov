import React from "react";
import {Header} from './Header';
import './Infobox.css';

function InfoBox(){
    return(
        <div className="interfaz-infobox">
            <Header/>
            <div className="contenido">
                <h3 className="titulo">Contamos con 12 box en cada una de nuestras sedes</h3>
                <h5 className="subtitulo">4 box grandes, 4 medianos y 4 pequeños</h5>
                <div className="tabla">
                    <div className="box-grandes">
                        <p className="texto"> Los box grandes. Estos box estan destinados para albergar a varios pacientes, por lo general de temprana edad, en actividades educativas, de lo cual se encargan los educadores diferenciales. </p>
                    </div>
                    <div className="box-medianos">
                        <p className="texto">Los box medianos. Estos box estarían destinados al acondicionamiento fisico de lo que se encargarian los kinesiologos, y a la insercion al mundo laboral y/o estimulo social dentro de la sociedad actual, de lo cual se harian cargo los terapeutas ocupacionales.</p>
                    </div>
                    <div className="box-pequenos">
                        Por ultimo se encuentran los box pequenos, los cuales estan destinados a sesiones psicologicas o de medicina general. Sesiones que estan especialmente destinadas al area de nuestros pacientes con profesionales de vocacion.
                    </div>
                </div>
                <a className="text">Se le asignara uno de estos box, dependiendo de la especialidad que elija.</a>
                <div className="disponibilidad">
                    <p className="texto">Box disponibles por sede</p>
                    <ul className="lista">
                        <li>
                            <h3 className="subtitulo">La Serena</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.1700924966617!2d-71.24978284875712!3d-29.917005032233654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691ca5d8e6f046b%3A0xb4451ec6794f0012!2sAv.%20Gabriel%20Gonz%C3%A1lez%20Videla%201670%2C%20La%20Serena%2C%20Coquimbo!5e0!3m2!1ses!2scl!4v1669654479549!5m2!1ses!2scl" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </li>
                        <li>
                            <h3 className="subtitulo">Temuco</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.040262322572!2d-72.61216524854214!3d-38.739838295270204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3f992a09909%3A0x594f1ffa8a32df32!2sAv.%20San%20Mart%C3%ADn%200502%2C%204810765%20Temuco%2C%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1669654932863!5m2!1ses!2scl" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </li>
                        <li>
                            <h3 className="subtitulo">Santiago, providencia</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4025867076493!2d-70.62803274867605!3d-33.438816404208076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5810955189b%3A0xd50dbe8ceb35a74!2sRicardo%20Matte%20P%C3%A9rez%20546%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1669655184406!5m2!1ses!2scl" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </li>
                        <li>
                            <h3 className="subtitulo">Santiago, San Bernardo</h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4407222789455!2d-70.69604074867233!3d-33.59386761217973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d942bad951b3%3A0x6060cf4ed317bc12!2sSan%20Mart%C3%ADn%20405%2C%208051352%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1669655268108!5m2!1ses!2scl" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default InfoBox;