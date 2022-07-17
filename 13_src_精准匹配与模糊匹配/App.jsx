import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About"; // 知识点：一般组件放在component文件夹下，路由组件放在pages文件夹下
import Home from "./pages/Home"; // 这就是路由组件，被router管理的组件
import Header from "./components/Header"; // 这就是一般组件
import MyNavLink from "./components/MyNavLink";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* 在React中靠路由连接实现切换组件 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由--官网：http://react-router.docschina.org/web/api/Route/route-render-methods */}
                {/* <Route path="/about" render={props=><About {...props}/>} /> */}
                {/* <Route path="/home" render={props=><Home {...props}/>} /> */}
                {/* 上面这种写法也可以，但是不知道有什么区别 */}
                {/* 这里不管传多少属性，只需要在MyNavLink组件里用{...this.props}接收就可以 */}
                {/* 包裹了Switch之后路由在匹配上一个路径之后就不会再匹配了，不包裹Switvh之后路由在匹配上一个路径之后还会接着往下匹配，会把所有和此路径相关的组件都展示出来，而且Switch会提高路由匹配效率 */}
                <Switch>
                {/* exact={true}或exact 开启精准（严格）匹配，脚手架默认是开启的模糊匹配，但是不要随便开启严格匹配，必须要用的时候再开启，随意开启可能会导致匹配不到二级路由，模糊匹配必须要保证to的顺序和path是对应的上，to里面的东西可以多，但是不能少 */}
                  <Route exact path="/about" component={About} a={1} b={2} c={3} />
                  <Route exact path="/home" component={Home} /> 
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
