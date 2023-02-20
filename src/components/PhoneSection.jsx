import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";
import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";



const PhoneSection = ({setSell}) => {

  const [Phone, setPhone] = useState([]);
  useEffect(() => {
    getPhones();
  }, []);

  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.phone_price < b.phone_price ? -1 : 1) },
    descending: { method: (a, b) => (a.phone_price > b.phone_price ? -1 : 1) },
  };

  // const phnAscending = [...Phone].sort((a, b) =>
  //   a.phone_price < b.phone_price ? 1 : -1,
  // );
  // console.log('price:',phnAscending);

  function getPhones() {
    axios.get('https://phonestore/api/phones').then(function (response) {
      console.log(response.data);
      setPhone(response.data);
    });
  }

  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundItem, setFoundItems] = useState(Phone);
  //filter currently bugged and don't show items at init
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = Phone.filter((item) => {
        return item.phone_name.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundItems(results);
    } else {
      setFoundItems(Phone);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };



  return (
    // do a better overflow
    <div className='flex flex-col gap-3 overflow-auto max-h-96'>
      <h1 className='text-center'>Наши Телефоны</h1>
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
      <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>Сортировка цены</option>
        <option value="ascending">По возрастанию</option>
        <option value="descending">По убыванию</option>
      </select>
      {
        foundItem && foundItem.length > 0 ? (

          foundItem.sort(sortMethods[sortState].method).map((phone, key) =>

            <div key={key} className='flex flex-col items-center border-2 border-black border-solid rounded-lg max-h-96'>
              <img src={phone.phone_img}></img>
              <div className='text-center'>{phone.phone_name}</div>
              <div>{phone.phone_price}</div>
              <button className='border border-black rounded-full hover:bg-slate-200'>В корзину</button>
            </div>
          )
        ) : (
          Phone.sort(sortMethods[sortState].method).map((phone, key) =>

          <div key={key} className='flex flex-col items-center border-2 border-black border-solid rounded-lg max-h-96'>
            <img src={phone.phone_img}></img>
            <div className='text-center'>{phone.phone_name}</div>
            <div>{phone.phone_price}</div>
            <button onClick={(e) => setSell(Phone[key])} className='border border-black rounded-full hover:bg-slate-200'>В корзину</button>
          </div>
        )
        )
      }

    </div>
  )
}

PhoneSection.propTypes = {
  setSell: PropTypes.func.isRequired
}

export default PhoneSection