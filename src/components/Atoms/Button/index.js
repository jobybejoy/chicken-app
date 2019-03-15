import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'

// Recheck button type requiment
export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonVarient = {
  PRIMARY: 'primary',
  OUTLINE: 'outline',
  TEXT: 'textButton',
  FAB: 'fab'
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export class Button extends Component {
  render() {
    const { name } = this.props
    const { type, onClick, varient, size, className, disabled } = this.props
    return (
      <button className={"button " + ButtonVarient[varient] + " " + ButtonSize[size] + ' ' + className}
        name={name}
        disabled={disabled}
        onClick={() => { onClick() }}
      >
        <Text component="body" varient={'buttonText'}>
          {this.props.children}
        </Text>
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'BUTTON',
  varient: 'PRIMARY',
  size: 'MEDIUM',
  disabled: false,
}

export default Button
