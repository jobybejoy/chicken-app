import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export class AuthRoute extends Component {

  render() {
    console.log('IN AUTH ROUTE', this.props);
    const { children, path, component, auth } = this.props
    if (!auth.uid) {
      return <Redirect to='/signin' />
    }
    return (
      <Route path={path} component={component} />
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
  auth: state.firebase.auth
})

export default connect(mapStateToProps)(AuthRoute)
