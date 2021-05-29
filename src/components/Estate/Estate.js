import React from 'react';
import TenantList from '../TenantList/TenantList';

const Estate = ({ estate }) => {
  const { name, location, buildingNo, rent, img, details, country, price } = estate;
  const { status, baths, bed } = details
  return (
    <div className="p-4 text-light bg-dark" style={{ width: "30rem" }}>
      <img className="mb-4" style={{ width: "100%" }} src={img} alt="" />
      <div>
        <h2>Name: {name}</h2>
        <p>Location: {location}</p>
        <p>Country: {country}</p>
        <p>BuildingNo: {buildingNo}</p>
        <p>Monthly Rent: {rent}</p>
      </div>
      <div>
        <p>Status: <span className="text-danger">{status}</span></p>
        <p>Bed: {baths}</p>
        <p>Baths: {baths}</p>
      </div>
      <h4 className="text-warning">Price: {price}</h4>
      <TenantList></TenantList>
    </div>
  );
};

export default Estate;