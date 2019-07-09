import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PaymentComponent from '../components/Templates/Payment'

import { setPaymentMethod } from '../store/actions/cartActions'
import { submitOrder } from '../store/actions/ordersActions'

export class Payment extends Component {
  render() {
    const { cart } = this.props
    return (
      <div>
        <PaymentComponent next={() => {
          this.props.setPaymentMethod('COD');
          this.props.history.push('/submit/order')
        }} total={cart.total} />
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

const mapDispatchToprops = (dispatch) => {
  return {
    setPaymentMethod: (method) => dispatch(setPaymentMethod(method)),
    submitOrder: () => dispatch(submitOrder())
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToprops),
)(Payment)
