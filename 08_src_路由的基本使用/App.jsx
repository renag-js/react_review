import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import About from './pages/About' // 知识点：一般组件放在component文件夹下，路由组件放在pages文件夹下
import Home from './pages/Home'
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* 在React中靠路由连接实现切换组件 */}
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由--官网：http://react-router.docschina.org/web/api/Route/route-render-methods */}
                  {/* <Route path="/about" render={props=><About {...props}/>} /> */} 
                  {/* <Route path="/home" render={props=><Home {...props}/>} /> */}
                  {/* 上面这种写法也可以，但是不知道有什么区别 */}
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
