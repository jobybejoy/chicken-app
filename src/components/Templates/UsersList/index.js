import React, { Component } from 'react'
import './style.css'
import UserCard from './UserCard'
import { Link } from 'react-router-dom'
import './style.css'

export class UsersList extends Component {

  render() {

    const { users, loading } = this.props;
    const length = users.length;

    if (length > 0) {
      return (
        <div className={"userList container"}>
          {
            users.map((user, key) => {

              return (
                <Link to={'/user/' + user.uid} className={'user_item'} key={key}>
                  <UserCard user={user} />
                </Link>
              )
            })
          }
        </div>
      )
    } else {
      return "Fetching Users"
    }

  }
}

UsersList.defaultProps = {
  users: [],
  loading: false
}

export default UsersList
