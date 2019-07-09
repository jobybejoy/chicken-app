import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import DashboardComponent from '../../components/Templates/Dashboard'
import { getAllMetaData } from '../../store/actions/adminActions'

// * Can Add Search,
// * Filter based on role
// * Users Count
// * Click User to profile



export class Dashboard extends Component {

  componentDidMount() {
    this.props.getAllMetaData();
  }

  render() {

    const { meta, error, auth } = this.props

    if (error) { return error }
    if (!meta) { return "Fetching Data" }

    return (
      <React.Fragment>
        <DashboardComponent meta={meta} />
      </React.Fragment>
    )
  }
}

const MapStateToProps = (state, props) => {
  return {
    // orders: state.firestore.ordered.orders,
    meta: state.admin.meta,
    error: state.admin.error
    // users: state.admin.allAdmins
    // admin: state.admin.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMetaData: (uid) => dispatch(getAllMetaData(uid)),
  }
}

export default compose(
  connect(MapStateToProps, mapDispatchToProps),
)(Dashboard)
