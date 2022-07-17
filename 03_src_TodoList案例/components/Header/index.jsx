import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.scss";
export default class Header extends Component {
  // 对接收的props进行类型以及必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  // 键盘事件的回调
  handleKeyUp = (event) => {
    // 结构赋值获取 keyCode, target
    const { keyCode, target } = event;
    const { todos } = this.props;
    let isTodoObj = false; // 是否已有代办事项
    // 判断是否是回车按键
    if (keyCode !== 13) return;
    // 添加的todo名字不能为空
    if (target.value.trim() === "") {
      alert("输入不能为空!!!");
      return;
    }
    // 判断是否已有重复的代表事项,如果有,给用户一个提示
    todos.forEach((todoObj) => {
      if (todoObj.name === target.value) {
        isTodoObj = true;
      }
    });
    // 已有代办事项, 并且用户确认继续添加
    if (
      isTodoObj &&
      window.confirm(`已有代办事项：${target.value}，还要继续添加吗？`)
    ) {
      // 准备好一个todo对象
      const todoObj = { id: nanoid(), name: target.value, done: false };
      // 将todoObj传递给Obj
      this.props.addTodo(todoObj);
      // 清空输入框
      target.value = "";
    }
    // 没有代办事项， 直接添加
    if (!isTodoObj) {
      // 准备好一个todo对象
      const todoObj = { id: nanoid(), name: target.value, done: false };
      // 将todoObj传递给Obj
      this.props.addTodo(todoObj);
      // 清空输入框
      target.value = "";
    }
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
