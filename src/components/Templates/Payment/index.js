import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import MiniCard from '../../Organisms/Card/MiniCard';
import { Link } from 'react-router-dom'

export class Payment extends Component {
  render() {
    return (
      <div className="payment container">
        <Text className={'category_title'} varient='h3' component='div'>Payment</Text>
        <div className="banner"></div>
        <div className="pay_options">
          <Link onClick={this.props.next}><MiniCard name="Cash on Delivery" /></Link>
          <MiniCard className={'disabled'} name="Online Payment" />
        </div>

      </div>
    )
  }
}

export default Payment
