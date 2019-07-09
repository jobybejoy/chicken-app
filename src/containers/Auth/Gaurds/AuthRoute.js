import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'

import { getAllItems } from '../../../store/actions/itemsActions'
import { getCart } from '../../../store/actions/cartActions'
// import firebase from '../../../config/firebaseConfig'
import RoleGaurd from './RoleGaurd'

// In this Componet | fn. is to check whether user is athenticated or not 

export class AuthRoute extends Component {

  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.getAllItems();
      this.props.getCart()
    }
  }

  render() {
    // console.log('IN AUTH ROUTE', this.props);
    const { children, path, component, auth, exact } = this.props

    if (isEmpty(auth)) {
      return <Redirect to='/login' />
    }

    // user.getIdTokenResult().then((idTokenResult)=>{user.admin = idTokenResult.claims.admin ;})

    // if (this.state.role === "Admin") {
    //   return <Redirect to='/admin' />
    // }

    return (
      <RoleGaurd {...this.props} exact={exact} path={path} component={component} />
    )

  }
}

// const AuthorizedRoute = ({ auth, component: Component, ...rest }) => {
//   return (
//     <Route {...rest} render={(props) => (
//       auth.uid ? <Component {...props} /> :
//         <Redirect to={{
//           pathname: '/signin',
//           state: { from: props.location }
//         }} />
//     )} />
//   )
// };

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  firebase: state.firebase
})

const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: () => dispatch(getAllItems()),
    getCart: () => dispatch(getCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute)
