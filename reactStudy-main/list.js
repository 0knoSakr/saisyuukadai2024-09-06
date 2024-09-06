import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function list() {
  return (
    <div>
      <h2>一覧画面</h2>
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
      <p>詳細情報</p>
      <p>編集</p>
      <button>新規登録</button>
    </div>
  );
}
