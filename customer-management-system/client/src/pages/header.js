import React from "react";
import {Link, Outlet } from "react-router-dom";

const HeaderList = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">顧客一覧</Link>
          <Link to="/new">新規登録</Link>
          <Link to="/edit/:id">顧客詳細</Link>
          <Link to="/:id">登録編集</Link>
        </ul>
      </nav>
      <Outlet />{" "}
    </div>
  );
};

export default HeaderList;
