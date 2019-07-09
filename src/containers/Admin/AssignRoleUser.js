import React, { Component } from 'react'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import AssignRoleUserComponent from '../../components/Templates/AssignRole/AssignRoleUser'
import { getTheUser, toggleRole, addRole } from '../../store/actions/adminActions'

// * Can Add Search,
// * Filter based on role
// * Users Count
// * Click User to profile



export class AssignRoleUser extends Component {

  componentDidMount() {
    const uid = this.props.match.params.uid
    this.props.getTheUser(uid);
  }

  render() {

    const { user, error, auth, toggleRole, addRole } = this.props

    if (error) { return error }
    if (user.uid !== this.props.match.params.uid) { return "Fetching User" }

    return (
      <React.Fragment>
        <AssignRoleUserComponent user={user}
          functions={{
            toggleRole: (uid, role) => toggleRole(uid, role),
            addRole: (uid, roles) => addRole(uid, roles),
          }}
        />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state, props) => {
  return {
    // orders: state.firestore.ordered.orders,
    user: state.admin.userProfile,
    error: state.admin.error
    // users: state.admin.allAdmins
    // admin: state.admin.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTheUser: (uid) => dispatch(getTheUser(uid)),
    toggleRole: (uid, role) => dispatch(toggleRole(uid, role)),
    addRole: (uid, roles) => dispatch(addRole(uid, roles))
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   { collection: 'orders' }
  // ])
)(AssignRoleUser)
