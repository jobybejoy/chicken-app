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

    const { type, placeholder, UISize, name, error, autofocus, disabled } = this.props

    const errorToggle = error ? 'error' : '';

    return (
      <input className={"input " + InputType[type] + " " + InputSize[UISize] + " " + errorToggle}
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
