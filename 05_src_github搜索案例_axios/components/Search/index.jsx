import React, { Component } from "react";
import axios from "axios";
import "./index.scss";

export default class Search extends Component {
  search = () => {
    // 获取用户输入的内容
    const {
      keyWordElement: { value: keyWord },
    } = this; // 解构赋值的连续写法+重命名，但是最后只会定义了一个变量/常量（value）重命名为keyWord，这个变量/常量就是最后一个被解构赋值出来的变量/常量（value）
    // 发送请求前通知App更新状态
    this.props.updateAppState({isFirst:false,isLoading:true})
    // 发送网路请求
    // 如果发送请求的主机名与当前网页的主机名一样可以不用写，如：http://localhost:3000
    // axios.defaults.baseURL = '默认地址'
    const url = `/api/search/users?q=${keyWord}`;
    axios.get(url).then(
      (response) => {
        // 请求成功后通知App更新状态
        this.props.updateAppState({isLoading:false,users:response.data.items})
      },
      (error) => {
        this.props.updateAppState({isLoading:false,err:error.message})
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="输入关键字点击搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
