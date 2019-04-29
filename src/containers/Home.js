import React, { Component } from 'react'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import HomeComponent from '../components/Templates/Home'
import { getAllItems } from '../store/actions/itemsActions'



//* Delete the TEMP only for TEST purpouse
import Temp from '../containers/temp/temp'
import { NavBar } from './temp/NavBar';

export class Home extends Component {

  componentDidMount() {
    this.props.getAllItems();
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: () => dispatch(getAllItems()),
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   { collection: 'items' }
  // ])
)(Home)
