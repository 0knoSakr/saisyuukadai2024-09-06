// /src/pages/EditCustomerPage.js
import React from 'react';

const EditCustomerPage = () => {
  return (
    <div>
      <h1>顧客編集ページ</h1>
      <thead>
        <tr>
          <th>アポ日付</th>
          <th>契約した売上</th>
          <th>会社名</th>
          <th>会社名かな</th>
          <th>担当者名</th>
          <th>資本金</th>
          <th>従業員数</th>
          <th>URL</th>
          <th>現在契約本数</th>
          <th>アポ先部署</th>
          <th>会社の所在地</th>
          <th>アポ内容</th>
          <th>目標数値</th>
        </tr>
      </thead>
      <tbody>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
        <td><input type="text"/></td>
      </tbody>
    </div>
  );
};

export default EditCustomerPage;
