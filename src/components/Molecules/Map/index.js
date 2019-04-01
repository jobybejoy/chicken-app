import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../Atoms/MapMarker'

class Map extends Component {
  // static defaultProps = {
  //   center: {
  //     lat: 25.276987,
  //     lng: 55.296249
  //   },
  //   zoom: 5
  // };

  state = {
    currentLatLng: {
      lat: 0,
      lng: 0,
    },
    zoom: 15,
    isLoading: true
  }

  componentDidMount = () => {
    this.getGeoLocation()
  };


  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position.coords);
          this.setState(prevState => ({
            currentLatLng: {
              ...prevState.currentLatLng,
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            isLoading: false
          }))
        }
      )

    } else {
      error => console.log(error)
    }
  }

  render() {

    if (this.state.isLoading) {
      return (
        "Loading"
      )
    }

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDEFJLDAstyueyUU0OJfaI_G-dW8_6zzY8" }}
          defaultCenter={this.state.currentLatLng}
          defaultZoom={this.state.zoom}
        >
          <MapMarker
            draggable={true}
            lat={this.state.currentLatLng.lat}
            lng={this.state.currentLatLng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;