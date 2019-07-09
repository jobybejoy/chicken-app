import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'

import { getAllItems } from '../../store/actions/itemsActions'
import { getCart } from '../../store/actions/cartActions'
import { isAuthedPrivilegedUser } from '../../store/actions/userActions';
import firebase from '../../config/firebaseConfig'

export class AuthRoute extends Component {

  // state = {
  //   role: ""
  // }

  componentDidMount() {
    if (this.props.auth.uid) {
      this.props.getAllItems();
      this.props.getCart()
      // this.getRole()
    }
  }

  getRole() {
    // return firebase.auth().currentUser.getIdTokenResult()
    //   .then((idTokenResult) => {
    //     if (idTokenResult.claims.admin) {
    //       this.setState({
    //         role: "Admin"
    //       })
    //     }
    //     this.setState({
    //       role: "User"
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    console.log('IN AUTH ROUTE', this.props);
    const { children, path, component, auth, exact } = this.props

    if (isEmpty(auth)) {
      return <Redirect to='/login' />
    }



    // user.getIdTokenResult().then((idTokenResult)=>{user.admin = idTokenResult.claims.admin ;})

    // if (this.state.role === "Admin") {
    //   return <Redirect to='/admin' />
    // }

    return (
      <Route exact={exact} path={path} component={component} />
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
