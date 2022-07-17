import React, { Component } from 'react'
import './index.scss'

export default class Home extends Component {
  render() {
    console.log('我是Home组件的props：',this.props);
    return (
      <h3>我是Home的内容</h3>
    )
  }
}
