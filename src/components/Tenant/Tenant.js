import React, { useContext } from 'react';
import { TenantListContext } from '../Context/TenantListContext';

const Tenant = ({ item }) => {
  const { removeTenant, findItem } = useContext(TenantListContext)
  return (
    <li className="list-item">
      <span className="text-info" style={{ fontWeight: "bold" }}>{item.title}</span>
      <div >
        <button style={{ marginRight: "5px" }} onClick={() => removeTenant(item.id)} className="btn-delete task-btn">Delete
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(item.id)} className="btn-edit task-btn">Edit
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Tenant;