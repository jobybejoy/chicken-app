import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import OrderComponent from '../components/Templates/ShowOrder/User'
import { Redirect } from 'react-router-dom'

import { getTheOrder } from '../store/actions/ordersActions'

// DONE Push Order with ID and show it
// TODO get the order details by hooking up to a redux

export class Order extends Component {

  componentDidMount() {
    const id = this.props.match.params.order_id
    // console.log(id);
    this.props.getTheOrder(id)

  }

  render() {
    const { order, orderError } = this.props

    console.log('ORDER', order);

    if (orderError) {
      return (
        <div>
          {orderError}
        </div>
      )
    }

    // if (!order) {
    //   return <Redirect to="/cart" />
    // }
    return (
      <div>
        <OrderComponent
          items={order.items}
          total={order.total}
          location={order.delivery_type}
          payment={order.payment}
          order_id={order.order_id}
          user={order.user}
          orderedAt={order.orderedAt}
          status={order.status || null}
        />
      </div>
    )
  }
}
const MapStateToProps = (state) => {
  return {
    order: state.orders.order,
    orderError: state.orders.error,
    auth: state.firebase.auth
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    getTheOrder: (order_id) => dispatch(getTheOrder(order_id)),
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToprops),
)(Order)
