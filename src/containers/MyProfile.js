import React, { Component } from 'react'
import { connect } from 'react-redux'

import { compose } from 'redux'

import UserProfile from '../components/Templates/UserProfile'
import { log } from 'util';
import { changeCurrentRole } from '../store/actions/userActions'

// * Can Add Search,
// * Filter based on role
// * Users Count
// * Click User to profile



export class MyProfile extends Component {

  // componentDidMount() {
  //   const uid = this.props.match.params.uid
  //   this.props.getTheUser(uid);
  // }

  render() {
    // console.log(this.props);

    const { user, error, auth } = this.props

    if (error) { return error }
    if (!user) { return "Fetching " + auth.displayName }

    return (
      <React.Fragment>
        <UserProfile user={user} showContact={false}
          functions={{
            changeCurrentRole: (role) => {
              this.props.changeCurrentRole(role)
              if (role === "admin") this.props.history.push('/admin/dashboard');
              if (role === "manager") this.props.history.push('/manager/dashboard');
              if (role === "deliveryBoy") this.props.history.push('/delivery/boy/dashboard');
            },
          }}
        />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state, props) => {
  return {
    // orders: state.firestore.ordered.orders,
    user: state.firebase.profile,
    // users: state.admin.allAdmins
    // admin: state.admin.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getTheUser: (uid) => dispatch(getTheUser(uid)),
    changeCurrentRole: (role) => dispatch(changeCurrentRole(role)),
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   { collection: 'orders' }
  // ])
)(MyProfile)
