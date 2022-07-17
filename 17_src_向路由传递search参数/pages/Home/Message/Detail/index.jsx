import React, { Component } from 'react'
// import qs from 'querystring' //旧的解析转换search参数库
// 新的解析search参数库
import qs from 'qs' // querystring改名为qs了, 有的版本更名为query-string，或者需要下载querystring
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
    // const {id,title} = this.props.match.params 
    
    // 接收search参数
    const {search} = this.props.location
    console.log(this.props.location);
    const {id,title} = qs.parse(search.slice(1)) // slice字符串和数组身上都有这个方法
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
