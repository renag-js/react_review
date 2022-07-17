// 引入react核心库
import React from "react";
// 引入reactDOM
import ReactDOM from "react-dom/client";
// 引入App
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(  
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
