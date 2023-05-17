import React, { useState, useEffect, useContext } from 'react';
import './List.css';
import { BaseUrlContext } from '../App';
import Details from './Details/Details';
import useFetch from '../../hooks/useFetch';

const List = () => {
  const baseUrl = useContext(BaseUrlContext);
  const [selected, setSelected] = useState(null);
  const { data, loading } = useFetch(`${baseUrl}/users.json`, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <ul className='list'>
        {data.map((item) => (
          <li
            key={item.id}
            className={`list-item ${
              selected === item.id ? 'list-item--active' : ''
            }`}
            onClick={() => setSelected(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {selected && <Details id={selected} />}
    </div>
  );
};

export default List;
