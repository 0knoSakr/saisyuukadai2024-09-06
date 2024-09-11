import React, { useEffect, useState } from "react";
import CustomerCard from "../components/CustomerCard";
import api from "../services/api";

const ListPage = () => {
  const [ customers, setCustomer ] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get('/customers');
        setCustomer(response.data);
      } catch (error) {
        console.error('データの取得に失敗しました', error);
      }
    }
    fetchCustomer();
  }, []);

  // const tableBorder = {
  //   borderCollapse: "collapse",
  //   width: "100%",
  //   border: "1px solid black",
  // };

  // const cellStyle = {
  //   border: "1px solid black",
  //   padding: "8px",
  //   backgroundColor: "#FFF",
  // };

  // const tableHeadStyle = {
  //   ...cellStyle,
  //   backgroundColor: "#f2f2f2",
  // };

  // const wrap = {
  //   style: {
  //     maxWidth: "1100px",
  //     margin: "0 auto",
  //   },
  // };

  return (
    <div>
      <h1>顧客一覧</h1>
      {customers.map((customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
      <button onClick={() => window.location.href = "/customers/new"}>新規登録</button>
    </div>
  )
};
export default ListPage;
