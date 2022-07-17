import React, { Component } from "react";
import "./index.scss";
export default class Item extends Component {
  state = {
    mouse: false, // 表示鼠标移入,移出
  };

  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    // 确保handleMouse的返回值是一个函数, 这样React才能帮你调用
    return () => {
      this.setState({
        mouse: flag,
      });
    };
  };

  // 勾选or取消勾选的回调
  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  // 刪除一个todo的回调
  handleDelete = (id) => {
    // 这里得写window.confirm(), 不然react会报错
    if (window.confirm("确定删除吗")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;

    const item = (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)} // 这里能用一个变量控制鼠标的移入移出是因为实在List组件里面循环Item组件了, 有几个todoObj就循环几遍, 相当于有多个组件(也就是有多个变量), 而且组件之间(包括里面的变量)互补影响
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={() => this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );

    return item;
  }
}
