import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const RegPopUp = () => {
    return (
        <Popup trigger={<button> Регистрация</button>} modal >
            <div className='grid grid-flow-row '>
            <h1 className='justify-self-center'>Регистрация</h1>
      <form className='flex flex-col gap-3'>
        <p>Логин:</p>
        <input className='border'></input>

        <p>Пароль:</p>
        <input className='border'></input>

        <input type='submit' className='self-center' value='Зарегистрироваться'></input>
      </form>
            </div>
        </Popup>
    )
}

export default RegPopUp