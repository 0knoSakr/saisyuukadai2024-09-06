// /src/pages/DetailPage.js
import React from "react";
import "../App.css";
import { useParms } from 'react-router-dom';
import api from "../services/api"

const DetailPage = () => {
  const { categoryList, refreshCategories } = useCategories();

  const datePage = [
    "会社名",
    "会社の所在地",
    "資本金",
    "アポ日付",
    "契約した売上",
    "現在契約本数",
    "アポ先部署",
    "担当者名",
    "ふりがな",
    "会社URL",
  ];

  const businessList = [
    "商談履歴",
    "〇〇業務に関する商談",
    "〇〇案件に関する打合せ",
    "ToDoリスト",
    "目標数値",
  ];
  return (
    <div>
      <h1>顧客詳細ページ</h1>
      <table>
        <thead>
            {datePage.map((value, index) => (
              <tr><th key={index}>{value}</th></tr>
            ))}
        </thead>
        <tbody>
          {categoryList[0] && (
            <>
              {categoryList.map((value) => (
                <React.Fragment key={value.id}>
                  <tr>
                    <td>{value.name}</td>
                  </tr>
                  <tr>
                    <td>{value.location}</td>
                  </tr>
                  <tr>
                    <td>{value.capital}</td>
                  </tr>
                  <tr>
                    <td>{value.date}</td>
                  </tr>
                  <tr>
                    <td>{value.sales}</td>
                  </tr>
                  <tr>
                    <td>{value.contracts}</td>
                  </tr>
                  <tr>
                    <td>{value.department}</td>
                  </tr>
                  <tr>
                    <td>{value.manager}</td>
                  </tr>
                  <tr>
                    <td>{value.lmanagerkana}</td>
                  </tr>
                  <tr>
                    <td>{value.url}</td>
                  </tr>
                </React.Fragment>
              ))}
            </>
          )}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            {businessList.map((value, index) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td>10,000,000</td>
            <td>
              <button>編集</button>
            </td>
          </tr>
          <tr>
            <td>目標数値と現在数値までいくらか</td>
          </tr>
          <tr>
            <td>残り</td>
            <td>￥6,000,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};  
export default DetailPage;
