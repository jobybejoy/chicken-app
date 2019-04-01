import React, { Component } from 'react'
import './style.css'
import Icon from '@material-ui/icons/Room'

export class MapMarker extends Component {
  render() {
    return (
      <Icon className={'map_icon'} />
    )
  }
}

export default MapMarker
