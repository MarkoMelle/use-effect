import React, { useContext } from 'react';
import './Details.css';
import { BaseUrlContext } from '../../App';
import useFetch from '../../../hooks/useFetch';

const Details = ({ id }) => {
  const baseUrl = useContext(BaseUrlContext);
  const { data: details, loading } = useFetch(`${baseUrl}/${id}.json`, null);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='details'>
      <h2 className='details-name'>{details.name}</h2>
      <img
        className='details__image'
        key={id}
        src={details.avatar}
        alt={details.name}
      />
      <p>City: {details.details.city}</p>
      <p>Company: {details.details.company}</p>
      <p>Position: {details.details.position}</p>
    </div>
  );
};

export default Details;
