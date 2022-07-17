import React, { Component } from "react";
import { Button, DatePicker, Space } from "antd";
// import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";
// import "antd/dist/antd.min.css"; // 已经按需引入了,就可以把这个删掉
import './App.less' // package.json文件里的scripts被改了2次，，第一次是按需引入，第二次是自定义主题，可以直接写成第二种的心事，按需引入和自定义主题都能用

export default class App extends Component {
  
  
  render() {
    // const { RangePicker } = DatePicker;
    // const onChange = (date, dateString) => {
    //   console.log(date, dateString);
    // };
    return (
      <div className="dome">
        App
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }
}
