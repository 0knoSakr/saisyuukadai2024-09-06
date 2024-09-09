import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const ListPage = () => {
  const navigate = useNavigate();
  const listPage = [
    "アポ日付",
    "契約した売上",
    "会社名",
    "会社名かな",
    "担当者名",
    "資本金",
    "従業員数",
    "URL",
    "現在契約本数",
    "アポ先部署",
    "",
  ];

  const customerData = [
    {
      date: "2024/3/4",
      sales: "378,000",
      name: "A社",
      namekana: "えーしゃ",
      manager: "山田太郎",
      capital: "30,000,000",
      employees: "400",
      url: "http://test.com",
      contracts: "2",
      department: "総務部",
    },
    {
      date: "2024/3/8",
      sales: "150,000",
      name: "B社",
      namekana: "びーしゃ",
      manager: "佐藤次郎",
      capital: "30,000,000",
      employees: "350",
      url: "http://test.com",
      contracts: "1",
      department: "総務部",
    },
  ];

  const tableBorder = {
    borderCollapse: "collapse",
    width: "100%",
    border: "1px solid black",
  };

  const cellStyle = {
    border: "1px solid black",
    padding: "8px",
    backgroundColor: "#FFF",
  };

  const tableHeadStyle = {
    ...cellStyle,
    backgroundColor: "#f2f2f2",
  };

  const wrap = {
    style: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
  };

  return (
    <div style={wrap.style}>
      <h1>顧客一覧ページ</h1>
      <button onClick={() => navigate("/new")}>新規登録</button>
      <table style={tableBorder}>
        <thead>
          <tr>
            {listPage.map((value, index) => (
              <th key={index} style={tableHeadStyle}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customerData.map((value, index) => (
            <tr key={index}>
              <td style={cellStyle}>{value.date}</td>
              <td style={cellStyle}>{value.sales}</td>
              <td style={cellStyle}>{value.name}</td>
              <td style={cellStyle}>{value.namekana}</td>
              <td style={cellStyle}>{value.manager}</td>
              <td style={cellStyle}>{value.capital}</td>
              <td style={cellStyle}>{value.employees}</td>
              <td style={cellStyle}>{value.url}</td>
              <td style={cellStyle}>{value.contracts}</td>
              <td style={cellStyle}>{value.department}</td>
              <td style={cellStyle}>
                <Link to="/:id">詳細情報</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPage;
