import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
  ];
  return (
    <div>
      <h1>顧客一覧ページ</h1>
      <thead>
        <tr>
          {listPage.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>
      <button onClick={() => navigate("/new")}>新規登録</button>
      <Link to="/:id">詳細情報</Link>
    </div>
  );
};

export default ListPage;
