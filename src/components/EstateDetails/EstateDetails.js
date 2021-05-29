import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json';
import Estate from '../Estate/Estate';
import TenantForm from '../TenantForm/TenantForm';
const EstateDetails = () => {
  const { estateId } = useParams()
  const singleEstate = fakeData.find(item => item.id === estateId);
  return (
    <div className="container d-flex justify-content-evenly">
      <div>
        <Estate estate={singleEstate}></Estate>
      </div>
      <div>
        <TenantForm></TenantForm>
      </div>
    </div>
  );
};

export default EstateDetails;