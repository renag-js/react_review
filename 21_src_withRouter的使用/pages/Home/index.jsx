import React, { Component } from "react";
import { Route, Switch,Redirect } from "react-router-dom"; // 组件里面用Route,index.js里面用BrowserRouter或HashRouter
import Message from "./Message";
import News from "./News";
import MyNavLink from "../../components/MyNavLink";
import "./index.scss";

export default class Home extends Component {
  render() {
    // console.log("我是Home组件的props：", this.props);
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    );
  }
}
