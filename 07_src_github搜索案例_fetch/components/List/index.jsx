import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.scss";

export default class List extends Component {
  state = {
    users: [], // 所有用户的信息，users初始值为数组
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 标识是否处于加载中
    error: '' // 存储请求相关的错误信息
  };

  // React组件在开发环境下会被调用2次。
  /**
   * 开发（dev）环境下，渲染使用的是严格模式（strict mode），严格模式是通过调用两次constructor函数来检测意外的副作用（现在来看不止调用了constructor，整个组件都被调用了2次），通过此方式将一些隐藏的比较深的副作用放大。
    生产（production）环境不会出现此情况。
   */
  componentDidMount() {
   this.token = PubSub.subscribe('updateListState',(_,stateObj)=>{ // 第一个参数是消息名，不想用，但是不能不写，可以用_占个位
      this.setState(stateObj) // 注意：setState里面的对象是会和state对象做合并操作，而不是替换操作
    })
  }

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, error } = this.state;
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
        {error}
      </h2>      
    );
    console.log(error);
    return (
      <div className="row">
        {isFirst?FirstView:isLoading?LoadingtView:error?errView:userList}
      </div>
    );
  }
}
