import React, { Component } from 'react'
import LocationComponent from '../components/Templates/Location'

export class Location extends Component {
  render() {
    console.log('location container', this.props);

    return (
      <div>
        <LocationComponent {...this.props} />
      </div>
    )
  }
}

export default Location

