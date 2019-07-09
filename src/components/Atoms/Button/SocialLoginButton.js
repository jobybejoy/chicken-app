import React, { Component } from 'react'
import './style.css'
import GoogleLogo from '../../../assets/icons/google_logo.png'
import facebookLogo from '../../../assets/icons/facebook_logo_white.png'
import Text from '../Text'

export class SocialLoginButton extends Component {
  render() {
    const { provider, onClick } = this.props
    if (provider === "Facebook") {
      return (
        <button className="socialLoginButton facebook container" onClick={() => onClick()}>
          <img src={facebookLogo} alt="" className="logo" />
          <Text className="label">Sign In with Facebook</Text>
        </button>
      )
    }
    return (
      <button className="socialLoginButton google container" onClick={() => onClick()}>
        <img src={GoogleLogo} alt="" className="logo" />
        <Text className="label">Sign In with Google</Text>
      </button>
    )
  }
}

export default SocialLoginButton
