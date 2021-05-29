import React, { useContext, useEffect, useState } from 'react';
import { TenantListContext } from '../Context/TenantListContext';


const TenantForm = () => {
  const { addTenant, editItem, editTenants } = useContext(TenantListContext)
  const [title, setTitle] = useState("")

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editItem === null) {
      addTenant(title)
      setTitle("")
    } else {
      editTenants(title, editItem.id)
    }
  }

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title)
    } else {
      setTitle("")
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} type="text" value={title} className="task-input" />
      <div className="buttons">
        <button type="submit" className="add-task-btn">{editItem !== null ? "Edit Tenant" : "Add Tenant"}</button>
      </div>

    </form>
  );
};

export default TenantForm;