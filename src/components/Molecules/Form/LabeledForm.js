import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Input from '../../Atoms/Input'

import './style.css'

export const helperTypes = {
  DEFAULT: 'default',
  ERROR: 'error'
}

export class LabeledForm extends Component {

  render() {

    const { name, label, placeholder, disabled, helperText, helperType } = this.props;

    return (
      <React.Fragment>
        <div className={'FormLabel'}>
          <label for={name}>
            <Text varient={'label'}>
              {label}
            </Text>
          </label>
        </div>
        <Input
          name={name}
          placeholder={placeholder}
          error={helperType === 'ERROR' ? true : false}
          disabled={disabled}
        />
        <div className={'form helperText ' + helperTypes[helperType]}>
          <Text varient="caption">
            {helperText}
          </Text>
        </div>
      </React.Fragment>
    )
  }
}

LabeledForm.defaultProps = {
  name: 'default',
  label: 'default',
  helperText: '',
  helperType: 'default',
  placeholder: '',
  disabled: false,
  onClick: () => { },
}

export default LabeledForm
