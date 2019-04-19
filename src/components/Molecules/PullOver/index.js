import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'
import './style.css'
import { Redirect } from 'react-router-dom'

// TODO May have to change the main content, or make varients if needed.

export class PullOver extends Component {

  goTo(url) {

  }

  render() {

    const { label, price, cta_label, cta_to } = this.props

    return (
      <div className="pullContainer">
        <div className='pullOver container'>
          <div className="content">
            <Text className="total_label" component="div" varient={'h4'}>{label}</Text>
            <Text className="total_value" component="div" varient={'h4'}>{price}</Text>
          </div>
          <Button className="cta_btn" varient={'PRIMARY'} name={'primary'} onClick={() => { this.props.history.push(cta_to) }}>{cta_label}</Button>
        </div>
      </div>

    )
  }
}

PullOver.defaultProps = {
  label: 'TOTAL',
  price: '0 AED',
  cta_label: 'CHECKOUT',
  cta_to: '/'
};

export default PullOver
