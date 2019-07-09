import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { submitOrder, postRequest } from '../store/actions/ordersActions'

import axios from 'axios'
import { submitOrder_LOCAL, submitOrder_PROD } from '../_constants/api'

export class SubmitOrder extends Component {

  state = {
    status: "",
    orderStat: false,
    order_id: undefined
  }

  componentWillMount() {
    this.setState({
      status: 'Loading'
    });
  }

  componentDidMount() {
    console.log('HOLA', this.props);

    // const fromLocation = this.props.location.state.fromPage
    // if (fromLocation === 'payment') {
    // alert('ORDER')

    // if (!this.state.orderStat) {
    //   const resp = this.props.submitOrder()
    //     .then((resp) => {
    //       this.setState({
    //         orderStat: true
    //       });
    //     })
    //   console.log('GOTA RESP', resp);
    // }

    this.setState({
      status: 'Submitting'
    });

    const uid = this.props.auth.uid

    if (this.state.orderStat === false) {
      axios({
        method: 'post',
        url: submitOrder_PROD,
        data: {
          uid: uid
        }
      })
        .then(function (response) {
          // handle success
          console.log(response.data.order_id);
          return response.data.order_id
        })
        .then((id) => {
          this.setState({ order_id: id, orderStat: true, status: 'Done' })
        })
        .catch((err) => {
          console.log(err);

          this.setState({ status: 'Failed' })
        })
    }

    // this.props.history.push('/checkout')
    // } else {
    //   alert('G 2 checkout')
    // this.props.history.push('/checkout')
    // }
  }

  render() {

    if (this.state.order_id) {
      this.props.history.push('/submitted/order/' + this.state.order_id)
    }

    return (
      <div>
        {this.state.status}
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  // const orders = state.orders.orders.find('')
  return {
    cart: state.cart,
    auth: state.firebase.auth,
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    submitOrder: () => dispatch(submitOrder()),
    postRequest: (url, data) => dispatch(postRequest(url, data))
  }
}


export default compose(
  connect(MapStateToProps, mapDispatchToprops),
)(SubmitOrder)
