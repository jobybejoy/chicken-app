import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import CheckoutItem from './CheckoutItem'
import RadioPicker from '../../Molecules/RadioPicker';
import LocationCard from './LocationCard'

//TODO mmm not happy with the Location stying

export class Checkout extends Component {
  render() {

    const { items } = this.props

    return (
      <div className="checkout container">
        <Text className={'category_title'} varient='h3' component='div'>Cart</Text>
        {items.map((item) => {
          return (
            <CheckoutItem item={item} />
          )
        })}
        <Text className={'category_title'} varient='h3' component='div'>Delivery</Text>
        <LocationCard title={'home'} address={'Lizzy Bunglow, Karuvatta, Adoor, Pathanamthitta, Kerala, India 691523'} />
      </div>
    )
  }
}

Checkout.defaultProps = {
  items: [
    {
      name: "Chicken",
      url: "Comming Soon",
      subItems: [
        { name: "Meat", count: 2, price: 20, subPrice: 40 },
        { name: "Egg", count: 10, price: 1, subPrice: 10 }
      ],
      subTotal: 50
    },
    {
      name: "Duck",
      url: "Comming Soon",
      subItems: [
        { name: "Egg", count: 10, price: 1, subPrice: 10 }
      ],
      subTotal: 10
    }
  ]
};

export default Checkout
