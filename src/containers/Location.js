import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { addDeliveryType } from '../store/actions/cartActions'
import { getUserLocations, addUserLocation } from '../store/actions/userActions'
import LocationComponent from '../components/Templates/Location'



export class Location extends Component {

  componentDidMount() {
    this.props.getUserLocations()
  }



  render() {


    console.log('location container', this.props);

    return (
      <div>
        <LocationComponent {...this.props}
          userLocations={this.props.userLocations}
          prevOrderLocation={this.props.prevOrderLocation}
          functions={{
            addDeliveryType: (location) => this.props.addDeliveryType(location),
            addUserLocation: (location) => this.props.addUserLocation(location),
            getUserLocations: () => this.props.getUserLocations()
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // Can get previos location from user obj!!
    // prevOrderLocation: {
    // title: 'Pickup',
    // title: "Home", fullAddress: `Lizzy Bunglow, Karuvatta, Adoor, Pathanamthitta, Kerala, India 691523`
    // },
    userLocations: [{ title: "Pickup", fullAddress: '' }, ...state.user.locations],
    prevOrderLocation: state.cart.delivery_type || { title: 'Pickup' }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeliveryType: (location) => dispatch(addDeliveryType(location)),
    addUserLocation: (location) => dispatch(addUserLocation(location)),
    getUserLocations: () => dispatch(getUserLocations()),
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),

)(Location)
