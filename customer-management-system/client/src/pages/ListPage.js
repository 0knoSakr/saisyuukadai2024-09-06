import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";


const ListPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>顧客一覧ページ</h1>
      {/* ここに顧客一覧を表示するコンポーネントを追加 */}
      <button onClick={() => navigate("/new")}>新規登録</button>
    </div>
  );
};

export default ListPage;
