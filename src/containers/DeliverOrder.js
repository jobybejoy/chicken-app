import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import DeliverOrderComponent from '../components/Templates/DeliverOrder'
import { Redirect } from 'react-router-dom'

import { getTheOrder } from '../store/actions/ordersActions'

// DONE Push Order with ID and show it
// TODO get the order details by hooking up to a redux

export class DeliverOrder extends Component {

  componentDidMount() {
    const id = this.props.match.params.order_id
    console.log(this.props);
    this.props.getTheOrder(id)

  }

  render() {
    const { order, orderError } = this.props

    console.log('ORDER C', order);

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
        <DeliverOrderComponent
          // items={order.items}
          // total={order.total}
          // location={order.delivery_type}
          // payment={order.payment}
          // order_id={order.order_id}
          // user={order.user}
          // status={order.status || null}
          order={order}
          url_uid={this.props.match.params.uid}
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
)(DeliverOrder)
