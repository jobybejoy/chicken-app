import React, { Component } from 'react'
import { connect } from 'react-redux'

import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import UsersList from '../../components/Templates/UsersList'
import { getAllUsers, getAllAdmins, getAllManagers, getAllDeliveryBoys } from '../../store/actions/adminActions'

// * Can Add Search,
// * Filter based on role
// * Users Count
// * Click User to profile



export class AllUsers extends Component {

  componentDidMount() {
    const role = this.props.match.params.role
    switch (role) {
      case 'users': return this.props.getAllUsers(); break;
      case 'admins': return this.props.getAllAdmins(); break;
      case 'managers': return this.props.getAllManagers(); break;
      case 'deliveryBoys': return this.props.getAllDeliveryBoys(); break;
      default: return null
    }



  }

  render() {

    const { users, auth } = this.props

    return (
      <React.Fragment>
        <UsersList users={users} />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state, props) => {
  // return {
  // orders: state.firestore.ordered.orders,
  const role = props.match.params.role
  switch (role) {
    case 'users': return { users: state.admin.allUsers };
    case 'managers': return { users: state.admin.allManagers };
    case 'deliveryBoys': return { users: state.admin.allDeliveryBoys }
    case 'admins': return { users: state.admin.allAdmins };
    default: return { users: [] }
  }
  // users: state.admin.allAdmins
  // admin: state.admin.orders
  // }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    getAllAdmins: () => dispatch(getAllAdmins()),
    getAllManagers: () => dispatch(getAllManagers()),
    getAllDeliveryBoys: () => dispatch(getAllDeliveryBoys())
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
  // firestoreConnect([
  //   { collection: 'orders' }
  // ])
)(AllUsers)
