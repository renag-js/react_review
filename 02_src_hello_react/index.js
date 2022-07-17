// 引入react核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 引入App组件
import App from "./App";

// 悬案App组件到页面 --- react18x版本推荐使用的方式
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
