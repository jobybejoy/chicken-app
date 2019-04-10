import React, { Component } from 'react'
import './style.css'
import Logo from '../../../assets/icons/chicken-icon.png'
import Text from '../../Atoms/Text'
import BadgeIcon from './BadgeIcon'
import { NavLink } from 'react-router-dom'

export class AppBar extends Component {
  render() {
    const { cart, home } = this.props
    return (
      <div className="AppBar">
        <div className="left">
          <NavLink to={home.page}>
            <div className="logo">
              <img src={Logo} alt="Chicken App LOGO" />
              <Text className={'logoName'} varient={'h1'} component={'h1'}>Chicken App</Text>
            </div>
          </NavLink>
        </div>
        <div className="right">
          <NavLink to={cart.page}>
            <BadgeIcon count={cart.count} icon={'cart'} />
          </NavLink>
        </div>
      </div >
    )
  }
}

AppBar.defaultProps = {
  home: "/",
  cart: {
    count: 0,
    page: '/cart'
  }
};

export default AppBar
