// /src/pages/EditCustomerPage.js
import React from "react";

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

  const textBoxStyle = {
    style: {
      width: "90%",
      padding: "5px",
    },
  };

  const inputs = Array(13).fill("")

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
