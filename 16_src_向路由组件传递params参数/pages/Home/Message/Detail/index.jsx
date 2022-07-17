import React, { Component } from 'react'
import './index.scss'

const DetailData = [
  {id:'01',content:'你好！'},
  {id:'02',content:'你好！！'},
  {id:'03',content:'你好！！！'},
]

export default class Detail extends Component {
  render() {
    // console.log(this.props.match.params);
    // 接收Params参数
    const {id,title} = this.props.match.params
    // 有时间看一下这个find方法
    const findResult = DetailData.find((detailObj)=>{
      return detailObj.id === id
    })
    return (
      <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTNT:{findResult.content}</li>
      </ul>
    )
  }
}
