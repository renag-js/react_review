import React, { Component } from "react";

import "./App.scss";
import List from "./components/List";
import Search from "./components/Search";

export default class App extends Component {
  state = {
    users: [], // 所有用户的信息，users初始值为数组
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    err: '' // 存储请求相关的错误信息
  };

  // 更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    );
  }
}
