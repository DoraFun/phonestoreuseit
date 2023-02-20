import logo from "./imgs/logo.png"
import cart_logo from "./imgs/cart.png"

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Placeholder from "./components/Placeholder";
import NoteSection from "./components/NoteSection";
import PhoneSection from "./components/PhoneSection";
import AuthPopUp from "./components/AuthAndLogin/AuthPopUp";
import RegPopUp from "./components/AuthAndLogin/RegPopUp";
import { useState } from 'react';
import PleaseLogin from "./cart/PleaseLogin";
import RealCart from "./cart/RealCart";


function App() {

  const [token, setToken] = useState();



// for phones
  const [sell, setSell] = useState([]);
  const [sell2, setSell2] = useState([]);
  // for books



  return (
    <div className="App">

      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 border border-blue-700 border-solid">
        <img width={'45px'} src={logo}></img>
        <h1 className="col-start-2 text-4xl font-bold text-blue-900">ИНТЕРНЕТ-МАГАЗИН</h1>

        <form className="flex flex-row items-center col-start-2 gap-2">
          <p>Поиск по </p>
          <input className="border" type='text' placeholder="Введите модель"></input>
          {/* <button className="border border-black border-solid bg-slate-300">модели ноутбука</button>
          <button className="border border-black border-solid bg-slate-300">модели телефона</button> */}
        </form>


        <div className="col-start-3 row-start-3">
          {
            !token ? ( <> <AuthPopUp setToken={setToken}/> <RegPopUp/> </>) : (<div>Вы вошли :)</div>)
          }
          
          
        </div>

          {/* I probably should use props... */}
        <div className="col-start-3 row-start-3 ml-80"> 
          {
            !token ? (<RealCart cart={sell} cart2 = {sell2} authorized = ''/>) : (<RealCart cart={sell} cart2= {sell2} authorized = '1'/>)
          }
        </div>
      </div>
      {/* header ends, should be new component */}


      {/* routing wrap pog ? */}
      <div className="grid grid-cols-2">
      <BrowserRouter>
        <div className="bg-green-400 ">
          
            <ul>
              <li><Link to="/">На главную</Link></li>
              <li><Link to="/notebooks">Ноутбуки</Link></li>
              <li><Link to="/phones">Телефоны</Link></li>
            </ul>
          

        </div>

        <div>
          <Routes>
            <Route index element={<Placeholder/>} />
            <Route path="/notebooks" element={<NoteSection setSell2={setSell2}/>}/>
            <Route path="/phones" element={<PhoneSection setSell={setSell}/>}/>
          </Routes>
        </div>

        </BrowserRouter>
      </div>

      <div className="bg-blue-800"></div>
    </div>
  );
}

export default App;
