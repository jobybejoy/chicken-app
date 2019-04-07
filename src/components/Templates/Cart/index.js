import React, { Component } from 'react'
import './style.css'
import CartItem from './CartItem';

export class Cart extends Component {


  render() {

    const { cart, loading } = this.props;

    return (
      <div className={"page container"}>

        {
          cart.items.map((item, index) => {
            return (
              <CartItem item={item} key={index} />
            )
          })
        }
      </div>
    )
  }
}

Cart.defaultProps = {
  cart: {
    summary: {
      itemsCount: 0
    },
    items: []
  },
  loading: false,
}

export default Cart
