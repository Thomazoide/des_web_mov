import React from 'react';
import { Header } from './componentes/Header';
import { Routes, Route, Router } from 'react-router-dom';
import Login from './componentes/Login';
import Home from './componentes/Home';
import UICONTROL from './componentes/UICONTROL';
import Agendar from './componentes/Agendar'
import InfoBox from './componentes/Infobox'

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/UICONTROL' element={<UICONTROL />} />
        <Route path='/Agendar' element={<Agendar />} />
        <Route path='/InfoBox' element={<InfoBox />} />
      </Routes>
   );

}



export default App;