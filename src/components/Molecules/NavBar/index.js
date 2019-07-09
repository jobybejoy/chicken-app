import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import { Link, withRouter } from 'react-router-dom';

import './style.css'

import HomeIcon from '../../../assets/icons/NavIcons/Home.svg'
import SearchIcon from '../../../assets/icons/NavIcons/Search.svg'
import OrdersIcon from '../../../assets/icons/NavIcons/Orders.svg'
import ProfileIcon from '../../../assets/icons/NavIcons/Profile.svg'

// Lite Icons
import HomeLiteIcon from '../../../assets/icons/NavIcons/Home-lite.svg'
import SearchLiteIcon from '../../../assets/icons/NavIcons/Search-lite.svg'
import OrdersLiteIcon from '../../../assets/icons/NavIcons/Orders-lite.svg'
import ProfileLiteIcon from '../../../assets/icons/NavIcons/Profile-lite.svg'



class NavBar extends Component {


  render() {

    // console.log('nav', this.props);

    const { location } = this.props
    const path = location.pathname

    if (path === "/location") return null
    if (path === "/login") return null

    return (
      <div className={'navBar container'}>
        <div className="navItems">
          <Link to={'/'} >
            <div className={"item " + (path === "/" && 'selected')} >
              <img src={path === "/" ? HomeLiteIcon : HomeIcon} alt="" />
              {path === "/" &&
                <Text className={"itemName"} component="div" varient="label" >Home</Text>
              }
            </div>
          </Link>

          <Link to={'/search'} >
            <div className={"item " + (path === "/search" && 'selected')} >
              <img src={path === "/search" ? SearchLiteIcon : SearchIcon} alt="" />
              {path === "/search" &&
                <Text className={"itemName"} component="div" varient="label" >Search</Text>
              }
            </div>
          </Link>

          <Link to={'/my/orders'} >
            <div className={"item " + (path === "/my/orders" && 'selected')} >
              <img src={path === "/my/orders" ? OrdersLiteIcon : OrdersIcon} alt="" />
              {path === "/my/orders" &&
                <Text className={"itemName"} component="div" varient="label" >Orders</Text>
              }
            </div>
          </Link>

          <Link to={'/my/profile'} >
            <div className={"item " + (path === "/my/profile" && 'selected')} >
              <img src={path === "/my/profile" ? ProfileLiteIcon : ProfileIcon} alt="" />
              {path === "/my/profile" &&
                <Text className={"itemName"} component="div" varient="label" >Profile</Text>
              }
            </div>
          </Link>

        </div>
      </div>
    )
  }
}


const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter
