import React from 'react';
import Popup from 'reactjs-popup';
import cart_logo from '../imgs/cart.png'
const RealCart = (props, { cart }) => (
  console.log(cart),
  <Popup {...cart}
    trigger={open => (
      <button className="button"><img width={'45px'} src={cart_logo}></img></button>
    )}
    position="bottom center"
    closeOnDocumentClick
  >
    { 
      !props.authorized ? (<div>Войдите чтоб увидеть корзину</div>) : (<div>

         {cart?.map((phone, key) =>

          <div key={key} className=''>
            <img width="64px" src={phone.phone_img}></img>
            <div className='text-center'>{phone.phone_name}</div>
            <div>{phone.phone_price}</div>
          </div>
            
        )} 

      </div>)
    }
  </Popup>

);

export default RealCart