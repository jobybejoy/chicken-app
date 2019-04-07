import React, { Component } from 'react'
import './style.css'
import Logo from '../../../assets/icons/chicken-icon.png'
import Text from '../../Atoms/Text'
import BadgeIcon from './BadgeIcon'

export class AppBar extends Component {
  render() {
    return (
      <div className="AppBar">
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="Chicken App LOGO" />
            <Text className={'logoName'} varient={'h1'} component={'h1'}>Chicken App</Text>
          </div>
        </div>
        <div className="right">
          <BadgeIcon count={10} icon={'cart'} />
        </div>
      </div>
    )
  }
}

export default AppBar
