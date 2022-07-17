import React, { Component } from "react";
import PubSub from "pubsub-js";
// import axios from "axios";
import "./index.scss";

export default class Search extends Component {
  search = async () => {  
    // 获取用户输入的内容
    const {
      keyWordElement: { value: keyWord },
    } = this; // 解构赋值的连续写法+重命名，但是最后只会定义了一个变量/常量（value）重命名为keyWord，这个变量/常量就是最后一个被解构赋值出来的变量/常量（value）
    if (keyWord.trim() === "") {
      alert("输入不能为空");
      return;
    }

    // 发送请求前通知List更新状态
    PubSub.publish("updateListState", { isFirst: false, isLoading: true });
    // 发送网路请求---使用axios发送
    // 如果发送请求的主机名与当前网页的主机名一样可以不用写，如：http://localhost:3000
    // axios.defaults.baseURL = '默认地址'
    const url = `/api/search/users?q=${keyWord.trim()}`;

    //#region
    // axios.get(url).then(
    //   (response) => {
    //     // 请求成功后通知List更新状态
    //     PubSub.publish('updateListState',{isLoading:false,users:response.data.items})
    //   },
    //   (error) => {
    //     PubSub.publish('updateListState',{isLoading:false,err:error.message})

    //   }
    // );
    //#endregion

    // 发送网路请求---使用axios发送（未优化）
    // fetch(url)
    //   .then(
    //     (response) => {
    //       console.log("联系服务器成功了", response);
    //       return response.json();
    //     },
    //     (error) => {
    //       console.log("联系服务器失败了", error);
    //       return new Promise((resolve,rejected)=>{})
    //     }
    //   )
    //   .then(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );

    // 发送网路请求---使用axios发送（已优化）
    try {
      const response = await fetch(url); // async和await是ES8新特性
      const data = await response.json(); // await表达式必须放在async函数里执行，async（关键字）必须加在离await最近的函数上（原因简单来说是和 Generator（ES6提出的一种异步编程解决思想） 的思路是一脉相承的，—— async/await 提案最早的草稿里就说了，它相当于一个带自动 spawn 功能的 Generator，就是一个语法糖。[1]
      // 所以，它带上特殊标记（async）的原因应该和 Generator 需要用*标记的原因类似）
      PubSub.publish("updateListState", {
        isLoading: false,
        users: data.items,
      });
    } catch (error) {
      PubSub.publish("updateListState", {
        isLoading: false,
        error:error.message
      });
    }
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
