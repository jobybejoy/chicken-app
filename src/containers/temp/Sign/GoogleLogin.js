import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
// import GoogleButton from 'react-google-button' // optional

function googleSignIn(firebase) {

}

export function LoginPage({ firebase, auth }) {
  return (
    <div >
      {/* <GoogleButton/> button can be used instead */}
      <button onClick={() => {
        firebase.login({ provider: 'google', type: 'popup' })

      }}>
        Login With Google
      </button>
      <button onClick={() => firebase.login({ provider: 'facebook', type: 'popup' })}>
        Login With Facebook
      </button>
      <div>
        <h2>Auth</h2>
        {
          !isLoaded(auth)
            ? <span>Loading...</span>
            : isEmpty(auth)
              ? <span>Not Authed</span>
              : <pre>{JSON.stringify(auth, null, 2)}</pre>
        }
      </div>
    </div>
  )
}

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
}

export default compose(
  withFirebase,
  connect(({ firebase: { auth } }) => ({ auth }))
)(LoginPage)