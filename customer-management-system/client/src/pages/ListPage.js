// /src/pages/ListPage.js
import React from "react";

const ListPage = () => {
  return (
    <div>
      <h1>顧客一覧ページ</h1>
      <ul>
        <li>アポ日付</li>
        <li>契約した売上</li>
        <li>会社名</li>
        <li>会社名かな</li>
        <li>担当者名</li>
        <li>資本金</li>
        <li>従業員数</li>
        <li>URL</li>
        <li>現在契約本数</li>
        <li>アポ先部署</li>
      </ul>
      <button>新規登録</button>
      <Link to="">詳細ページ</Link>
      <button>編集</button>
    </div>
  );
};

export default ListPage;
