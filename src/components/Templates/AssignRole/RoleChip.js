import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'

export class RoleChip extends Component {
  render() {

    const { selected, disabled, label, onClick } = this.props

    return (
      <div className={'roleChip ' + (selected && 'selected ') + (disabled && 'disabled')} onClick={onClick}>
        <Text className={"chipText"} component="div" varient="body2semibold" >{label}</Text>
      </div>
    )
  }
}

export default RoleChip
