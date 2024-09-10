// /src/pages/EditCustomerPage.js
import React from "react";
import "../App.css";

const EditCustomerPage = () => {
  const editPage = [
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
    "会社の所在地",
    "アポ内容",
    "目標数値",
  ];

  // const customerData = [
  //   {
  //     date: "2024/3/4",
  //     sales: "378,000",
  //     name: "A社",
  //     namekana: "えーしゃ",
  //     manager: "山田太郎",
  //     capital: "30,000,000",
  //     employees: "400",
  //     url: "http://test.com",
  //     contracts: "2",
  //     department: "総務部",
  //     location: "大阪府大阪市北区梅田2-2-2",
  //     datails: "マーケティング戦略の見直しと改善提案",
  //     numericalgoal: "売上目標1500万円",
  //   },
  //   {
  //     date: "2024/3/8",
  //     sales: "150,000",
  //     name: "B社",
  //     namekana: "びーしゃ",
  //     manager: "佐藤次郎",
  //     capital: "30,000,000",
  //     employees: "350",
  //     url: "http://test.com",
  //     contracts: "1",
  //     department: "総務部",
  //   },
  // ];

  const textBoxStyle = {
    style: {
      width: "90%",
      padding: "5px",
    },
  };

  const inputs = Array(13).fill("");

  return (
    <div>
      <h1>顧客編集ページ</h1>
      <thead>
        <tr>
          {editPage.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {inputs.map((_, index) => (
          <td key={index}>
            <input type="text" {...textBoxStyle} />
          </td>
        ))}
      </tbody>
    </div>
  );
};

export default EditCustomerPage;
