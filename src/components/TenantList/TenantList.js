import React, { useContext } from 'react';
import { TenantListContext } from '../Context/TenantListContext';
import Tenant from '../Tenant/Tenant';


const TenantList = () => {
  const { tenants } = useContext(TenantListContext)
  return (
    <div>
      <ul className="list" style={{ paddingLeft: "0" }}>
        {
          tenants.map(item => {
            return <Tenant key={item.id} item={item}></Tenant>
          })
        }
      </ul>
    </div>
  );
};

export default TenantList;