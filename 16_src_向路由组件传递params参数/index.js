// 引入react核心库
import React from "react";
// 引入reactDOM
import ReactDOM from "react-dom/client";
// 引入App
import App from "./App";
//引入路由器
import { BrowserRouter,HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
