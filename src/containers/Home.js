import React, { Component } from 'react'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import HomeComponent from '../components/Templates/Home'



//* Delete the TEMP only for TEST purpouse
import Temp from '../containers/temp/temp'
import { NavBar } from './temp/NavBar';

export class Home extends Component {
  render() {
    const { cart } = this.props

    console.log("IN HOME RENDER", this.props);

    const { items, auth } = this.props

    return (
      <React.Fragment>
        {/* <Temp /> */}
        <HomeComponent items={items} />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    // items: state.firestore.ordered.items,
    cart: state.cart,
    items: state.items.items,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(MapStateToProps),
  firestoreConnect([
    { collection: 'items' }
  ])
)(Home)
