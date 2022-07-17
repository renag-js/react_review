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

  pushShow = (id,title) => {
    // push跳转+携带params参数
    //  this.props.history.push(`/home/message/detail/${id}/${title}`)
    // push跳转+携带search（也可以叫query）参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
    // push跳转+携带state参数
    this.props.history.push(`/home/message/detail`,{id,title})

  };
  replaceShow = (id,title) => {
    // replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // replace跳转+携带search（也可以叫query）参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
    // replace跳转+携带state参数
    this.props.history.replace(`/home/message/detail`,{id,title})
  };

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
    const { messgaeArr } = this.state;
    return (
      <div>
        <ul>
          {messgaeArr.map((msgObj) => (
            <li key={msgObj.id}>
              {/* 向路由组件传递params参数 */}
              {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}
              {/* 向路由组件传递search参数---很像ajax的query参数 */}
              {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
              {/* 向路由组件传递state参数---传递state要求to得写成一个对象（第一个{}代表我要写js表达式，第二个{}代表我写的是一个对象） */}
              <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
              <button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>&nbsp;&nbsp;
              <button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
            </li>
          ))}
          <hr />
        </ul>
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        {/* search参数无需声明接收，正常注册路由即可 */}
        {/* <Route path="/home/message/detail" component={Detail}/> */}
        {/* state参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}/>

        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}
