import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'


export const ChipVarient = {
  DEFAULT: 'default',
  SELECTED: 'selected',
}

export const ChipSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export class Chip extends Component {
  render() {
    const { name, text } = this.props
    const { onClick, varient, size, className, disabled } = this.props
    return (
      <button className={"chip " + ChipVarient[varient] + " " + ChipSize[size] + " " + className} onClick={onClick}
        name={name} disabled={disabled}>
        <Text varient={'buttonText'}>
          {text}
        </Text>
      </button>
    )
  }
}

Chip.defaultProps = {
  text: 'chip',
  varient: 'DEFAULT',
  size: 'MEDIUM',
  onClick: () => { },
  disabled: false,
}

export default Chip
