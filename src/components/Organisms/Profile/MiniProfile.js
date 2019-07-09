import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'

import GoogleLogo from '../../../assets/icons/google_logo.png'
import FacebookLogo from '../../../assets/icons/facebook_logo.png'

export class MiniProfile extends Component {

  providerUI(provider) {
    if (provider === "google.com") {
      return (
        <div className="provider">
          <img src={GoogleLogo} alt="Profile Image" />
        </div>
      )
    } else {
      if (provider === "facebook.com") {
        return (
          <div className="provider facebook">
            <img src={FacebookLogo} alt="Profile Image" />
          </div>
        )
      }
    }
  }

  render() {

    const { name, url, email, provider, loading, children } = this.props

    if (!name || !url || loading) {
      return (
        <div>
          <div className="miniprofile container">
            <div className="photo loading"></div>
            <div className="name loading"></div>
            <div className="email loading"></div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className="miniprofile container ">
          <div className={"photo " + (!url && 'loading')}>
            {
              url &&
              <img src={url} alt="Profile Image" />
            }
            {
              provider &&
              this.providerUI(provider)
            }
          </div>
          <Text className={"name "} component="div" varient="h3" >{name}</Text>
          <Text className={"email "} component="div" varient="body" >{email}</Text>
          {
            children &&
            <div className="otherItems">
              {children}
            </div>
          }
        </div>
      </div >
    )
  }
}

export default MiniProfile
