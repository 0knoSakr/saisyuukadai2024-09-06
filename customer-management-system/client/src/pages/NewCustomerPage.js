// /src/pages/NewCustomerPage.js
import React from "react";

const NewCustomerPage = () => {
  const newPage = ["アポ日付", "契約した売上", "会社名", "会社名かな", "担当者名", "資本金", "従業員数", "URL", "現在契約本数", "アポ先部署", "会社の所在地", "アポ内容", "目標数値"];
  return (
    <div>
      <h1>新規顧客登録ページ</h1>
      <thead>
        <tr>
          {newPage.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>
    </div>
  );
};

export default NewCustomerPage;
