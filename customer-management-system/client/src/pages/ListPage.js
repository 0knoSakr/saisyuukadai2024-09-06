import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import useCategories from "../hooks/useCategories";

const ListPage = () => {
  const navigate = useNavigate();

  const { categoryList, refreshCategories } = useCategories();

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
          {categoryList.map((value, index) => (
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
                <Link to={`/${value.id}`}>詳細情報</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPage;
