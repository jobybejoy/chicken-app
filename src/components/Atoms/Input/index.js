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
  TEL: 'tel',
  NUMBER: 'number'
}

export class Input extends Component {
  render() {

    const { type, value, placeholder, UISize, name, error, autofocus, disabled } = this.props

    const errorToggle = error ? 'error' : '';

    return (
      <input className={"input " + InputType[type] + " " + InputSize[UISize] + " " + errorToggle}
        type={InputType[type] || 'text'}
        placeholder={placeholder}
        value={value}
        onChange={this.props.onChange}
        name={name}
        autofocus={autofocus}
        disabled={disabled} />
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
