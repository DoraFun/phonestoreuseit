import React from 'react';
import Popup from 'reactjs-popup';
import cart_logo from '../imgs/cart.png'
import axios from 'axios';
const RealCart = (props) => (

  
  <Popup 
  
    trigger={open => (
      <button className="button"><img width={'45px'} src={cart_logo}></img></button>
    )}
    position="bottom center"
    closeOnDocumentClick
  >
    
        {/* { 
      !props.authorized ? (<div>Войдите чтоб увидеть корзину</div>) : (<div>

          {props.cart.map((cart, key) =>

          <div key={key} className=''>
            <img width="64px" src={cart.phone_img}></img>
            <div className='text-center'>{cart.phone_name}</div>
            <div>{cart.phone_price}</div>
          </div>
            
        )}  

      </div>)
    }     */}
    
  <div className='flex flex-col items-center border-2 border-black border-solid rounded-lg '>
            <img width="64px" src={props.cart.phone_img}></img>
            <div className='text-center'>{props.cart.phone_name}</div>
            <div>{props.cart.phone_price}</div>
<br></br>
            <img width="64px" src={props.cart2.note_image}></img>
            <div className='text-center'>{props.cart2.note_name}</div>
            <div>{props.cart2.note_price}</div>
            <button onClick={imtired} className='border border-black rounded-full hover:bg-slate-200'>Купить</button>
          </div>
  </Popup>



);

const imtired = (event) => {

  event.preventDefault();
   alert("Спасибо за покупку");
  axios.post('https://phonestore/api/pay').then(function(response){
      console.log(response.data)
  });
  


}

export default RealCart