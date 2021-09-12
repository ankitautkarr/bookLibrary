import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './style.css';

export const Search = () => {
  const [response, setRes] = useState([]);

  const [data, setdata] = useState('');
  const uri = 'https://www.googleapis.com/books/v1/volumes';

  function handle(event) {
    var val = event.target.value;
    setdata(val);
  }

  let clickHandler = () => {
    console.log(data);
    axios.get(uri, { params: { q: data } }).then((res) => {
      setRes(res.data?.items);
      console.log(response);
    });
  };

  return (
    <div>
      <div id="container">
        <div id="head">Book Library</div>
        <div>
          <input onChange={handle} placeholder="SEARCH HERE..." />
          <button onClick={clickHandler}>SEARCH</button>
        </div>
        <br></br>
        <div>
          <table id="table1">
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Descprition</th>
            </tr>
            {response.map((items, key) => {
              return (
                <tr key={key}>
                  <td>{items.volumeInfo?.title}</td>
                  <td>{items.volumeInfo?.authors?? 'NA'}</td>
                  <td>
                    {items.volumeInfo?.description
                      ?? 'NA'}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};
