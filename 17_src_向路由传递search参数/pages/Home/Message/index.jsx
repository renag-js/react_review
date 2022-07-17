import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";
import "./index.scss";

export default class Message extends Component {
  state = {
    messgaeArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };
  render() {
    const { messgaeArr } = this.state;
    return (
      <div>
        <ul>
          {messgaeArr.map(msgObj => 
            <li key={msgObj.id}>
            {/* 向路由组件传递params参数 */}
              {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
            {/* 向路由组件传递search参数---很像ajax的query参数 */}
            <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
            </li>
          )}
          <hr />
        </ul>
        {/* 声明接收params参数 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
        {/* search参数无需声明接收，正常注册路由即可 */}
          <Route path="/home/message/detail" component={Detail}/>
      </div>
    );
  }
}
