import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Map from '../../Molecules/Map'
import './style.css'
import RadioPicker from '../../Molecules/RadioPicker';



export class Location extends Component {
  render() {
    return (
      <div className="location container">
        <div className="map">
          <Map ></Map>
        </div>
        <div className="popOver">
          <Text component="div" varient="h3" className="title" >
            Delivery
          </Text>
          <RadioPicker
            options={
              [
                { title: "Pickup" },
                { title: "Home", address: `Lizzy Bunglow, Karuvatta, Adoor, Pathanamthitta, Kerala, India 691523` }
              ]
            }
          />
        </div>
      </div>
    )
  }
}

export default Location
