import React, { Component } from "react";
import "./index.scss";
export default class Footer extends Component {

  // 全选checkbox的回调
  handleCheckAll =(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }

  // 删除全部已完成的回调
  handleClearAllDone = ()=>{
    if(window.confirm("确定删除全部已完成吗")) this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props;
    // 已完成的个数
    const doneCount = todos.reduce(
      // 箭头函数简写
      (pre, todoObj) => pre + (todoObj.done ? 1 : 0),0);
    // 总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          {/**这里不能写defaultChecked 因为defaultChecked会以第一次的值绑定, 后面不会变; Item组件里的li也一样 */}
          
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount===total && total!==0?true:false}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
