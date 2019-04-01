import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'

export class LocationCard extends Component {
  render() {

    const { title, address } = this.props;

    return (
      <div className={'locationCard container'}>
        <Text className="title" varient="h6" component="div">{title}</Text>
        <Text className="address" varient="body2semibold" component="div">{address}</Text>
      </div>
    )
  }
}

export default LocationCard
