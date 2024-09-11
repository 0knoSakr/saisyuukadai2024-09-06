import React from 'react';
import { Link } from 'react-router-dom';

const CustomerCard = ({ customer }) => {
  return (
    <div classNamr="customer-card">
      <h3>{customer.name}</h3>
      <p>担当者:{customer.manager}</p>
      <Link to={`/customers/${customer.id}`}>詳細</Link>
      <Link to={`/customer/edit/${customer.id}`}>編集</Link>
    </div>
  );
};

export default CustomerCard;
