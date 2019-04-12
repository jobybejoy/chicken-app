import React, { Component } from 'react'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import CartComponent from '../components/Templates/Cart'
import { addCountToSubItem, subtractCountToSubItem, addItem, removeItem } from '../store/actions/cartActions'

//* Remove This is temp
import Temp from './temp/temp'

export class Cart extends Component {
  render() {
    console.log('IN cart container', this.props);

    const { cart, auth } = this.props

    return (
      <React.Fragment>
        {/* <Temp /> */}
        <CartComponent cart={cart} functions={
          {
            addCount: (item) => this.props.addCount({ name: item.name, subItem: item.subItem }),
            subCount: (item) => this.props.subCount({ name: item.name, subItem: item.subItem }),
            addItem: (item) => this.props.addItem(item),
            removeItem: (item) => this.props.removeItem(item)
          }
        } />
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
    addCount: (item) => dispatch(addCountToSubItem(item)),
    subCount: (item) => dispatch(subtractCountToSubItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'items' }
  ])
)(Cart)
