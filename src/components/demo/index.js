import React, { Component } from 'react'
import './style.css'

export class demo extends Component {
  render() {
    return (
      <div className="border">
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default demo
