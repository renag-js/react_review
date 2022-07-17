import React, { Component } from "react";
import { withRouter } from "react-router-dom";  // withRouter是一个函数，接收一个参数，让普通组件的身上也有路由组件的那三个API：如：history，location，match等...
import "./index.scss";

 class Header extends Component {

  // 回退
  back = ()=>{
    this.props.history.goBack()
  }
  // 前进
  forward = ()=>{
    this.props.history.goForward()
  }
  // 回退/前进 0代表刷新页面 正数n前进n次，负数n回退n次
  go = ()=>{
    this.props.history.go(0)
  }

  
  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default withRouter(Header) 
// 加工完之后再导出，这样组件类里面的回调函数（组件实例对象上的方法）就可以用新的组件，然后它上面就会有路由组件特有的API
// withRouter的返回值是一个新组件
