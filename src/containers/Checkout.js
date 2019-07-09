import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'

import PullOver from '../components/Molecules/PullOver'
import CheckoutComponent from '../components/Templates/Checkout'

export class Checkout extends Component {
  render() {
    console.log('Checkout container props', this.props);

    const { items, total, order, delivery_type } = this.props

    if (items.length === 0) {
      return <Redirect to="/cart" />
    }

    return (
      <React.Fragment>
        <CheckoutComponent items={items} total={total} address={delivery_type} />
        <PullOver {...this.props}
          label="Total" price={total + ' AED'}
          cta_label="PAY" cta_to="/payment" />
      </React.Fragment>
    )
  }
}

Checkout.defaultProps = {
  items: [],
  address: {
    title: "",
    fullAddress: ""
  },
  total: 0
};

const MapStateToProps = (state) => {
  return {
    items: state.cart.items,
    total: state.cart.total,
    auth: state.firebase.auth,
    delivery_type: state.cart.delivery_type
  }
}

export default compose(
  connect(MapStateToProps, null),
)(Checkout)
