import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeClassName='demo' className="list-group-item" {...this.props}/> // children属性可以取到标签体内容
    )
  }
}
