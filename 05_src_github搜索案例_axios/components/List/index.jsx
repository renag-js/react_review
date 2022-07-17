import React, { Component } from "react";
import "./index.scss";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    // 用户列表
    const userList = (
      users.map((userObj) => (
          <div className="card" key={userObj.id}>
            <a href={userObj.html_url} target="_blank" rel="noreferrer">
              <img
                alt="avatar"
                src={userObj.avatar_url}
                style={{ width: "100px" }}
              />
            </a>
            <p className="card-text">{userObj.login}</p>
          </div>
        ))
    );

    // 首次展示视图
    const FirstView = (
      <h2>
        欢迎使用，输入关键字，点击搜索
      </h2>      
    );

    // Loading
    const LoadingtView = (
      <h2>
        Loading...
      </h2>      
    );

    // 请求错误展示视图
    const errView = (
      <h2 style={{color:'red'}}>
        {err}
      </h2>      
    );
    return (
      <div className="row">
        {isFirst?FirstView:isLoading?LoadingtView:err?errView:userList}
      </div>
    );
  }
}
