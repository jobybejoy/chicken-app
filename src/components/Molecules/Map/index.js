import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../Atoms/MapMarker'
import './style.css'

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

  createMapOptions(maps) {
    // next props are exposed at maps
    // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
    // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
    // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
    // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
    // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_TOP,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_LEFT
      },
      mapTypeControl: true
    };
  }


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
      // error => console.log(error)
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
      <div className="map container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDEFJLDAstyueyUU0OJfaI_G-dW8_6zzY8" }}
          options={this.createMapOptions}
          defaultCenter={this.state.currentLatLng}
          defaultZoom={this.state.zoom}
        >
          <MapMarker
            draggable={true}
            lat={this.state.currentLatLng.lat}
            lng={this.state.currentLatLng.lng}
          />
        </GoogleMapReact>
      </div >
    );
  }
}

export default Map;