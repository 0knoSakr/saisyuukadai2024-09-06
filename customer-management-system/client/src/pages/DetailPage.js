// /src/pages/DetailPage.js
import React from "react";

const DetailPage = () => {
  return (
    <div>
      <h1>顧客詳細ページ</h1>
      <table>
        <tr>
          <th>会社名</th>
          <td></td>
        </tr>
        <tr>
          <th>会社の所在地</th>
          <td></td>
        </tr>
        <tr>
          <th>資本金</th>
          <td></td>
        </tr>
        <tr>
          <th>アポ日付</th>
          <td></td>
        </tr>
        <tr>
          <th>契約した売上</th>
          <td></td>
        </tr>
        <tr>
          <th>現在契約本数</th>
          <td></td>
        </tr>
        <tr>
          <th>アポ先部署</th>
          <td></td>
        </tr>
        <tr>
          <th>担当者名</th>
          <td></td>
        </tr>
        <tr>
          <th>ふりがな</th>
          <td></td>
        </tr>
        <tr>
          <th>会社URL</th>
          <td></td>
        </tr>
      </table>
      <table>
        <tr><th>商談履歴</th></tr>
        <tr><td></td></tr>
        <tr><th>〇〇業務に関する商談</th></tr>
        <tr><td></td></tr>
        <tr><th>〇〇案件に関する打合せ</th></tr>
        <tr><th>ToDoリスト</th></tr>
        <tr><th>目標数値</th></tr>
        <tr>
          <td>10,000,000</td>
          <td><button>編集</button></td>
        </tr>
        <tr><td>目標数値と現在数値までいくらか</td></tr>
        <tr>
          <td>残り</td>
          <td>￥6,000,000</td>
        </tr>
      </table>
    </div>
  );
};

export default DetailPage;
