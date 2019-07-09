import React, { Component } from 'react'
import Text from '../../Atoms/Text'
import './style.css'

export class UserCard extends Component {
  render() {

    const { user } = this.props

    return (
      <div className={'userCard container'}>
        <img className={'user_image'} src={user.avatarUrl} alt="" />
        <div className={'i2'}>
          <Text className={"user_name"} component="div" varient="h3">{user.displayName}</Text>
          <Text className={"order_time"} component="div" varient="body2" >
            {user.email}
          </Text>
        </div>
        {/* <Text className={"order_id"} component="div" varient="h4" >{'#' +}</Text> */}
      </div>
    )
  }
}

export default UserCard
