import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PaymentComponent from '../components/Templates/Payment'

export class Payment extends Component {
  render() {
    const { cart } = this.props
    return (
      <div>
        <PaymentComponent next={() => { this.props.history.push('/order') }} total={cart.total} />
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
)(Payment)
