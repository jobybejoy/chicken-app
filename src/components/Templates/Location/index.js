import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Map from '../../Molecules/Map'
import './style.css'
import RadioPicker from '../../Molecules/RadioPicker';
import Button from '../../Atoms/Button'



export class Location extends Component {
  render() {

    console.log('location', this.props);

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
                { title: "Home", address: `Lizzy Bunglow, Karuvatta, Adoor, Pathanamthitta, Kerala, India 691523` },
                { title: "Office", address: `Lizzy Bunglow, Karuvatta, Adoor, Pathanamthitta, Kerala, India 691523` },
                // { title: "Walk", address: `Lizzy Bunglow, Karuvatta, Adoor, Pathanamthitta, Kerala, India 691523` }
              ]
            }
          />
          <Button className="cta_btn" varient={'PRIMARY'} name={'primary'} onClick={() => { this.props.history.push('/checkout') }}>CHECKOUT</Button>
          {/* ADD NeW LOCATION */}
        </div>
      </div>
    )
  }
}

export default Location
