import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'

import OrderComponent from '../components/Templates/ShowOrder'

import { getTheOrder } from '../store/actions/ordersActions'
import { changeOrderStatus } from '../store/actions/adminActions'

// DONE Push Order with ID and show it
// TODO get the order details by hooking up to a redux

export class Order extends Component {

  componentDidMount() {
    const id = this.props.match.params.order_id
    console.log(this.props);
    this.props.getTheOrder(id)

  }

  render() {
    const { order, orderError, auth } = this.props

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
          success={this.props.success}
          error={this.props.error}
          functions={{
            changeOrderStatus: (order_id, status) => this.props.changeOrderStatus(order_id, status),
          }}
        />
      </div>
    )
  }
}
const MapStateToProps = (state) => {
  return {
    order: state.orders.order,
    orderError: state.orders.error,
    auth: state.firebase.profile,
    success: state.admin.success,
    error: state.admin.error
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    getTheOrder: (order_id) => dispatch(getTheOrder(order_id)),
    changeOrderStatus: (order_id, status) => dispatch(changeOrderStatus(order_id, status))
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToprops),
)(Order)
