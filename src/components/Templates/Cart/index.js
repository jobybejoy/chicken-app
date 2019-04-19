import React, { Component } from 'react'
import './style.css'
import CartItem from './CartItem';
import CartEmpty from './CartEmpty'

export class Cart extends Component {


  render() {

    const { cart, loading, functions } = this.props;

    if (cart.items.length === 0) {
      return (
        <div className={"page container"}>
          <CartEmpty />
        </div>
      )
    }

    return (
      <div className={"page container"}>

        {
          cart.items.map((item, index) => {
            return (
              <CartItem item={item} key={index} functions={functions} />
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
  total: 0,
  loading: false,
}

export default Cart
