import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'
import './style.css'

// TODO May have to change the main content, or make varients if needed.

export class PullOver extends Component {
  render() {

    const { label, price, cta_label } = this.props

    return (
      <div className='pullOver container'>
        <div className="content">
          <Text className="total_label" component="div" varient={'h4'}>{label}</Text>
          <Text className="total_value" component="div" varient={'h4'}>{price}</Text>
        </div>
        <Button className="cta_btn" varient={'PRIMARY'} name={'primary'}>{cta_label}</Button>
      </div>
    )
  }
}

PullOver.defaultProps = {
  label: 'TOTAL',
  price: '0 AED',
  cta_label: 'CHECKOUT',
};

export default PullOver
