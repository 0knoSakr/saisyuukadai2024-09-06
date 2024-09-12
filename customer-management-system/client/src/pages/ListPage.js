import React, { useEffect, useState } from "react";
import CustomerCard from "../components/CustomerCard";
import api from "../services/api";

const ListPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get('/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('データの取得に失敗しました', error);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>顧客一覧</h1>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
      <button onClick={() => window.location.href = "/customers/new"}>新規登録</button>
    </div>
  );
};

export default ListPage;
