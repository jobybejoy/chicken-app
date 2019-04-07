import React, { Component } from 'react'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import CartComponent from '../components/Templates/Cart'
import { addCountToSubItem } from '../store/actions/cartActions'

export class Cart extends Component {
  render() {
    console.log('IN cart container', this.props);

    const { cart, auth } = this.props

    return (
      <React.Fragment>
        <button onClick={() => this.props.addCount({ name: 'Chicken', subItem: 'Meat' })}>ADD MEAT</button>
        <CartComponent cart={cart} />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    cart: state.cart,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: (item) => dispatch(addCountToSubItem(item))
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'items' }
  ])
)(Cart)
