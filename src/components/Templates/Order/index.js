import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'

import OrderSummary from '../Checkout/CheckoutItem'

export class Order extends Component {
  render() {

    const { items } = this.props

    return (
      <div className="payment container">
        <Text className={'category_title'} varient='h3' component='div'>Order Placed!!</Text>
        <div className="banner"></div>
        {items.map((item) => {
          return (
            <OrderSummary item={item} />
          )
        })}
      </div>
    )
  }
}

Order.defaultProps = {
  items: [
    {
      name: "Chicken",
      url: "Comming Soon",
      subItems: [
        { name: "Meat", count: 2, price: 20, subPrice: 40 },
        { name: "Egg", count: 10, price: 1, subPrice: 10 }
      ],
    },
    {
      name: "Duck",
      url: "Comming Soon",
      subItems: [
        { name: "Egg", count: 10, price: 1, subPrice: 10 }
      ],
    }
  ]
};


export default Order
