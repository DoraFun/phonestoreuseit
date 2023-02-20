import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";
import PropTypes from 'prop-types';


const NoteSection = ({setSell2}) => {

  const [Book, setBook] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  function getBooks() {
    axios.get('https://phonestore/api/books').then(function (response) {
      console.log(response.data);
      setBook(response.data);
    });
  }

  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: (a, b) => (a.note_price < b.note_price ? -1 : 1) },
    descending: { method: (a, b) => (a.note_price > b.note_price ? -1 : 1) },
  };

  //filter currently bugged and don't show items at init
  const [filterData, setFilterData] = useState(Book);

  const handleChange = (e) => {
    let keyword = e.target.value;
    let a = Book.filter((item) => {
      return item.note_name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFilterData(a);
  };

  return (
    <div className='flex flex-col gap-3 overflow-auto max-h-96'>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Поиск"
      />

      <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>Сортировка цены</option>
        <option value="ascending">По возрастанию</option>
        <option value="descending">По убыванию</option>
      </select>

      {

        filterData && filterData.length > 0 ? (

          filterData.sort(sortMethods[sortState].method).map((book, key) =>

            <div key={key} className='flex flex-col items-center border-2 border-black border-solid rounded-lg'>
              <img src={book.note_image}></img>
              <div className='text-center'>{book.note_name}</div>
              <div>{book.note_price}</div>
              <button className='border border-black rounded-full hover:bg-slate-200'>В корзину</button>
            </div>

          )

        ) : (
          Book.sort(sortMethods[sortState].method).map((book, key) =>

          <div key={key} className='flex flex-col items-center border-2 border-black border-solid rounded-lg'>
            <img src={book.note_image}></img>
            <div className='text-center'>{book.note_name}</div>
            <div>{book.note_price}</div>
            <button onClick={(e) => setSell2(Book[key])} className='border border-black rounded-full hover:bg-slate-200'>В корзину</button>
          </div>

        )
        )}


    </div>
  )
}
// <tr key={key}>
//   <td><img src={book.note_image}></img></td>
//   <td>{book.note_name}</td>
//   <td>{book.note_price}</td>

// </tr>

NoteSection.propTypes = {
  setSell2: PropTypes.func.isRequired
}

export default NoteSection