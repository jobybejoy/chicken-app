import React, { Component } from 'react'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import MyOrdersComponent from '../components/Templates/OrdersList/MyOrderList'
import { getMyOrders } from '../store/actions/ordersActions'



//* Delete the TEMP only for TEST purpouse
import Temp from '../containers/temp/temp'
import { NavBar } from './temp/NavBar';

export class MyOrders extends Component {

  componentDidMount() {
    this.props.getMyOrders();
  }

  render() {
    const { cart } = this.props

    console.log("IN HOME RENDER", this.props);

    const { orders, auth } = this.props

    return (
      <React.Fragment>
        {/* <Temp /> */}
        <MyOrdersComponent orders={orders} />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    // items: state.firestore.ordered.items,
    cart: state.cart,
    orders: state.orders.myOrders,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyOrders: () => dispatch(getMyOrders()),
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   { collection: 'items' }
  // ])
)(MyOrders)
