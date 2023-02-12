import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';

const AuthPopUp = ({setToken}) => {

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (event) => {
      event.preventDefault();

      axios.post('https://phonestore/api/auth', inputs).then(function(response){
          setToken(response.data)
          
          
      });
    }

  return (
    <Popup trigger={<button> Авторизация</button>} modal >
    <div className='grid grid-flow-row '>
      <h1 className='justify-self-center'>Авторизация</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <p>Логин:</p>
        <input onChange={handleChange} name='login' type='text' className='border'></input>

        <p>Пароль:</p>
        <input onChange={handleChange} name='pass' type='password' className='border'></input>

        <input type='submit' className='self-center' value='Войти'></input>
      </form>
    </div>
  </Popup>
  )
}

AuthPopUp.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default AuthPopUp