import React, { createContext, useState } from 'react';
// import { uuid } from "uuid";
import { v4 as uuidv4 } from 'uuid';

export const TenantListContext = createContext();

const TenantListContextProvider = (props) => {
  const [tenants, setTenants] = useState([])
  const [editItem, setEditItem] = useState(null)

  const addTenant = (title) => {
    setTenants([...tenants, { title, id: uuidv4() }])
  }
  const removeTenant = (id) => {
    setTenants(tenants.filter(tenant => tenant.id !== id))
  }
  const findItem = (id) => {
    const item = (tenants.find(tenant => tenant.id === id));
    setEditItem(item)
  }
  const editTenants = (title, id) => {
    const newTenant = tenants.map((tenant => (tenant.id === id) ? { title, id } : tenant));
    setTenants(newTenant);
    setEditItem(null)
  }

  return (
    <TenantListContext.Provider
      value={{
        tenants,
        addTenant,
        removeTenant,
        findItem,
        editItem,
        editTenants
      }}>
      {props.children}
    </TenantListContext.Provider>
  );
};

export default TenantListContextProvider;