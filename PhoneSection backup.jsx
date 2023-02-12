import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";

const PhoneSection = () => {

  const [Phone, setPhone] = useState([]);
  useEffect(() => {
    getPhones();
  }, []);

  function getPhones() {
    axios.get('https://phonestore/api/phones').then(function (response) {
      console.log(response.data);
      setPhone(response.data);
    });
  }

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-center'>Наши Телефоны</h1>
      
          {Phone.map((phone, key) =>
          
          <div  key={key} className='flex flex-col items-center border-2 border-black border-solid rounded-lg'>
            <img src={phone.phone_img}></img>
            <div className='text-center'>{phone.phone_name}</div>
            <div>{phone.phone_price}</div>
            <button className='border border-black rounded-full hover:bg-slate-200'>В корзину</button>
          </div>

          )}

    </div>
  )
}

export default PhoneSection