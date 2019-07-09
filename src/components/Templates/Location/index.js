import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Map from '../../Molecules/Map'
import './style.css'
import RadioPicker from '../../Molecules/RadioPicker';
import Button from '../../Atoms/Button'
import { Link } from 'react-router-dom'

import AddLocation from './AddLocation'

export class Location extends Component {

  state = {
    selected: {
      title: 'Pickup'
    },
    options: [
      { title: "Pickup", fullAddress: '' },
    ]
  }

  componentDidMount() {
    if (this.props.prevOrderLocation) {
      this.setState({
        selected: this.props.prevOrderLocation
      })
    }
    // this.props.functions.getUserLocations()

  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):


    // if (this.props.userLocations !== prevProps.userLocations) {

    //   this.setState({
    //     options: [

    //       ...this.props.userLocations
    //     ]
    //   })
    // }
  }

  render() {

    console.log('location', this.props);

    if (this.props.location.pathname === "/add/location") {
      return <AddLocation {...this.props} />
    }

    const { functions, prevOrderLocation, userLocations } = this.props

    return (
      <div className="location container">
        <div className="map">
          <Map></Map>
        </div>
        <div className="popOver">
          <Text component="div" varient="h3" className="title" >
            Delivery
          </Text>
          <RadioPicker
            options={userLocations}
            onSelection={(option) => { this.setState({ selected: option }) }}
            selected={prevOrderLocation}
          />
          <Link to={'/add/location'}>
            <div className="addLocation">
              <Text component="div" varient="body2" className="title new_loc_label" >
                Add New Location
              </Text>
            </div>
          </Link>

          <Button className="cta_btn" varient={'PRIMARY'} name={'primary'}
            onClick={() => {
              functions.addDeliveryType(this.state.selected)
              this.props.history.push('/checkout')
            }}>
            CHECKOUT
          </Button>
          {/* ADD NeW LOCATION */}
        </div>
      </div >
    )
  }
}

export default Location
