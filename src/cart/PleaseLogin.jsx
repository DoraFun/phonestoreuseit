import React from 'react';
import Popup from 'reactjs-popup';
import cart_logo from '../imgs/cart.png'
const PleaseLogin = (props) => (
    <Popup
      trigger={open => (
        <button className="button"><img width={'45px'} src={cart_logo}></img></button>
      )}
      position="bottom center"
      closeOnDocumentClick
    >
      <span> Авторизуйтесь для просмотра корзины </span>
    </Popup>

);

export default PleaseLogin