import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Input from '../../Atoms/Input'

import './style.css'

export const helperTypes = {
  DEFAULT: 'default',
  ERROR: 'error'
}

export class TextArea extends Component {

  render() {

    const { name, label, type, value, placeholder, disabled, helperText, helperType, fullWidth } = this.props;
    const errorToggle = helperType === "ERROR" ? 'error' : '';
    return (
      <React.Fragment>
        <div className={'FormLabel'}>
          <label for={name}>
            <Text varient={'label'}>
              {label}
            </Text>
          </label>
        </div>
        <textarea
          className={'textArea ' + errorToggle + ' ' + (fullWidth ? 'fullWidth' : '')}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={this.props.onChange}
          error={helperType === 'ERROR' ? true : false}
          disabled={disabled}
        >
          {value}
        </textarea>
        <div className={'form helperText ' + helperTypes[helperType]}>
          <Text varient="caption">
            {helperText}
          </Text>
        </div>
      </React.Fragment>
    )
  }
}

TextArea.defaultProps = {
  name: 'default',
  label: 'default',
  helperText: '',
  helperType: 'default',
  placeholder: '',
  disabled: false,
  onClick: () => { },
}

export default TextArea
