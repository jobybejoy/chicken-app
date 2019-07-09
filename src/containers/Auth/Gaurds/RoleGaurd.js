import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'


export class RoleGaurd extends Component {

  // Permissions 
  checkPermission(user, allowed = ['user']) {
    // const allowed = ['admin', 'user']
    return this.checkAuthorization(user, allowed)
  }

  // Gaurd
  checkAuthorization(user, allowedRoles) {
    if (!user) return false
    if (!user.roles) return false

    let res = false;
    allowedRoles.map((role) => {
      if (user.roles[role]) {
        res = true
      }
    })
    return res;
  }


  render() {
    // console.log('IN ROLE GAURD', this.props);
    const { children, path, component, auth, exact, profile, role, allowed } = this.props

    if (profile && isLoaded(profile)) {
      if (isEmpty(profile)) {
        return "Unauthorized Access"
      }
      // console.log(profile);
      if (this.checkPermission(profile, allowed || ['user'])) {
        return (
          <Route exact={exact} path={path} component={component} />
        )
      } else {
        return "I'm afraid , you don't have the clearance to access this page"
      }
    }

    return "Loading Profile"

    // return (
    //   <Route exact={exact} path={path} component={component} />
    // )

  }
}


const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoleGaurd)
