import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import CheckoutComponent from '../components/Templates/Checkout'

export class Checkout extends Component {
  render() {
    console.log('Checkout container props', this.props);

    const { items, address, total } = this.props
    return (
      <div>
        <CheckoutComponent items={items} total={total} address={address} />
      </div>
    )
  }
}

Checkout.defaultProps = {
  items: [],
  address: {
    title: "PICKUP",
    fullAddress: "The Locatiosn"
  },
  total: 0
};

const MapStateToProps = (state) => {
  return {
    items: state.cart.items,
    total: state.cart.total,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(MapStateToProps, null),
)(Checkout)
