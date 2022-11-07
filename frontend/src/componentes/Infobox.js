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
            </div>
        </div>
    )
}

export default InfoBox;