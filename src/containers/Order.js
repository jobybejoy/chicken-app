import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import OrderComponent from '../components/Templates/Order'


export class Order extends Component {
  render() {
    const { cart } = this.props
    return (
      <div>
        <OrderComponent items={cart.items} total={cart.total} />
      </div>
    )
  }
}
const MapStateToProps = (state) => {
  return {
    cart: state.cart,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(MapStateToProps, null),
)(Order)
