import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";


const ListPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>顧客一覧ページ</h1>
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
        </tr>
      </thead>
      <button onClick={() => navigate("/new")}>新規登録</button>
      <Link to="/:id">詳細情報</Link>
    </div>
  );
};

export default ListPage;
