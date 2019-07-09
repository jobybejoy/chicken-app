import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import CheckoutItem from './CheckoutItem'
import RadioPicker from '../../Molecules/RadioPicker';
import LocationCard from './LocationCard'
import { Link } from 'react-router-dom'

//TODO mmm not happy with the Location stying

export class Checkout extends Component {
  render() {

    const { items, total, address } = this.props

    return (
      <div className="checkout container">
        <Text className={'category_title'} varient='h3' component='div'>Cart</Text>
        {items.map((item) => {
          return (
            <CheckoutItem item={item} />
          )
        })}
        <div className="price_container">
          <Text className={'cart_total_label'} varient={'body'} component='span'>Total</Text>
          <Text className={'cart_total'} varient={'body'} component='span'>{total + ' AED' || 0 + ' AED'}</Text>
        </div>
        <Text className={'category_title'} varient='h3' component='div'>Delivery</Text>
        <Link to={'/location'} key={'Location'}>
          <LocationCard title={address.title} address={address.fullAddress} />
        </Link>
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
  ],
  address: {
    title: 'DEFAULT',
    fullAddress: 'DEFAULT'
  }
};

export default Checkout
