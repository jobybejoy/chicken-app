import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import Map from '../../Molecules/Map'
import './style.css'
import RadioPicker from '../../Molecules/RadioPicker';
import Button from '../../Atoms/Button'
import { Link } from 'react-router-dom'

import Form from '../../Molecules/Form/LabeledForm'
import TextArea from '../../Molecules/Form/TextArea'
import Chip from '../../Atoms/Chip'

export class AddLocation extends Component {

  state = {
    option: "Home",
    name: 'Home',
    fullAddress: ""
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = () => {
    // this.props.functions.getUserLocations()
  };



  render() {

    const { functions } = this.props

    return (
      <div className="location container">
        <div className="map">
          <Map ></Map>
        </div>
        <div className="popOver">
          <Text component="div" varient="h3" className="title" >
            Delivery Address
          </Text>

          <div>

            <div className="locationNames">
              <Chip text={'Home'} varient={this.state.option === "Home" ? 'SELECTED' : 'DEFAULT'}
                onClick={() => { this.setState({ name: 'Home', option: 'Home' }) }}
              />
              <Chip text={'Work'} varient={this.state.option === "Work" ? 'SELECTED' : 'DEFAULT'}
                onClick={() => { this.setState({ name: 'Work', option: 'Work' }) }}
              />
              <Chip text={'Other'} varient={this.state.option === "Other" ? 'SELECTED' : 'DEFAULT'}
                onClick={() => { this.setState({ name: '', option: 'Other' }) }} />
            </div>

            {
              this.state.option === "Other" &&
              (<Form
                name="name" onChange={(e) => this.onChange(e)}
                value={this.state.name} placeholder={'Location Name'} label={'Location Name'}
              // helperText={'Must Be a Valid Name!!'}
              />)
            }

            <div className="fullAddress">
              <TextArea
                name="fullAddress" value={this.state.fullAddress} onChange={(e) => this.onChange(e)}
                placeholder={'Address Here...'} label={'Full Address'}
                // helperType={'ERROR'} helperText={'Must Be a Valid Name!!'}
                fullWidth={true} />
            </div>


          </div>


          <Button className="cta_btn" varient={'PRIMARY'} name={'primary'}
            onClick={() => {
              if (this.state.fullAddress !== "") {
                functions.addUserLocation({
                  title: this.state.name,
                  fullAddress: this.state.fullAddress
                })
                this.props.history.push('/location')
              }
            }}>
            Add Location
          </Button>
          {/* ADD NeW LOCATION */}
        </div>
      </div >
    )
  }
}

export default AddLocation
