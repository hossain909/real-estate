import React, { useState } from 'react';
import fakeData from "../../fakeData/fakeData.json";
import EstateCard from '../EstateCard/EstateCard';
const Home = () => {
  const [estateData, setEstateData] = useState(fakeData)
  return (
    <div className="container d-flex flex-column">
      {
        estateData.map(item => <EstateCard key={item.id} data={item}></EstateCard>)
      }
    </div>
  );
};

export default Home;