import React, { Component } from 'react'
import './style.css'
import CartIcon from '@material-ui/icons/ShoppingCartOutlined'
import Text from '../../Atoms/Text'

export class BadgeIcon extends Component {
  render() {

    const { count } = this.props

    return (
      <div className='badge container'>
        <div className="badge item">
          <CartIcon className='icon' />
          {
            count > 0 &&
            <Text className='count' varient='caption' component='div'><span>{this.props.count}</span></Text>
          }</div>
      </div>
    )
  }
}

export default BadgeIcon
