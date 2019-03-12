import React, { Component } from 'react'
import './style.css'

export const InputSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  FULL: 'medium fullWidth',
}

export const InputType = {
  TEXT: 'text',
  EMAIL: 'email',
  TELE: 'tel',
}

export class Input extends Component {
  render() {

    const { type, placeholder, UISize, name, autofocus, disabled } = this.props

    return (
      <input className={"input " + InputType[type] + " " + InputSize[UISize]}
        type={type} placeholder={placeholder} name={name} autofocus={autofocus} disabled={disabled} />
    )
  }
}

Input.defaultProps = {
  type: 'TEXT',
  name: '',
  UISize: 'MEDIUM',
  varient: 'PRIMARY',
  autofocus: false,
  disabled: false,
}

export default Input
