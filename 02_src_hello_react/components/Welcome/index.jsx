import React, { Component } from "react";
// 样式的模块化， 给css文件名前面加上module， 就可以使用这种方式引入，避免样式冲突（但是此方法使用的很少）
// 一般用less或者scss写嵌套样式在最外部包一个文件名可以避免样式冲突
import welcome from "./index.module.scss";
export default class Welcome extends Component {
  render() {
    // 使用方式：引入的变量名.样式的类名
    return <h2 className={welcome.title}>Welcome</h2>;
  }
}
