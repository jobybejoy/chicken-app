import React, { Component } from 'react'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import OrderList from '../../components/Templates/OrdersList'
import { getAllOrders } from '../../store/actions/ordersActions'



export class AllOrders extends Component {

  componentDidMount() {
    this.props.getAllOrders();
  }

  render() {
    const { cart } = this.props

    console.log("IN HOME RENDER", this.props);

    const { orders, auth } = this.props

    return (
      <React.Fragment>
        {/* <Temp /> */}
        <OrderList orders={orders} />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    // orders: state.firestore.ordered.orders,
    cart: state.cart,
    orders: state.orders.orders,
    auth: state.firebase.auth,
    // admin: state.admin.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllOrders: () => dispatch(getAllOrders()),
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   { collection: 'orders' }
  // ])
)(AllOrders)
