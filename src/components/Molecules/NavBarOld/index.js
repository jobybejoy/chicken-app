import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CartIcon from '@material-ui/icons/ShoppingCart'

export class NavBar extends Component {

  state = {
    selected: 'Home',
  }

  render() {

    const { props, navItem } = this.props

    return (
      <React.Fragment>
        <div className="navBar container">
          {
            navItem &&
            navItem.map((item) => {
              return (
                <div className="item container" onClick={() => { this.setState({ selected: item.title }) }}>
                  <div className={'item ' + (this.state.selected == item.title && 'selected')}>
                    <div className="icon">
                      {item.icon}
                    </div>
                    <Text className="title" component="div" varient='caption'>{item.title}</Text>
                  </div>
                </div>
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

NavBar.defaultProps = {
  navItem: [
    { title: 'Home', icon: <HomeIcon className="src" /> },
    { title: 'Search', icon: <SearchIcon className="src" /> },
    { title: 'Map', icon: <LocalBarIcon className="src" /> },
    { title: 'Profile', icon: <AccountCircleIcon className="src" /> },
  ]
};

export default NavBar
