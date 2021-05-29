import React from 'react';
import { Link } from 'react-router-dom';

const EstateCard = ({ data }) => {
  const { name, location, id, img } = data

  return (
    <div className="my-3">
      <div className="card p-4" style={{ width: "20rem" }}>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <p>Location: {location}</p>
        <Link to={`/estateDetails/${id}`}><button className="btn btn-success">Show Details</button></Link>
      </div>
    </div>
  );
};

export default EstateCard;