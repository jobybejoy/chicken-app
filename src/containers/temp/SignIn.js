import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signUp } from '../../store/actions/authActions'

export class SignIn extends Component {

  onSubmit(e) {
    this.props.signIn({
      email: 'testUser@gmail.com',
      password: 'test1234'
    })
  }

  onSignUp() {
    this.props.signUp({
      email: 'testUser@gmail.com',
      password: 'test1234',
      firstName: 'TEST FIRST',
      lastName: 'Test LAST'
    })
  }
  render() {

    const { authError } = this.props
    console.log('IN SIGNIN RENDER', this.props);

    return (
      <div>
        {authError ? authError : null}
        <button onClick={(e) => { this.onSubmit(e) }}>SignIn</button>
        <br />
        <button onClick={(e) => { this.onSignUp() }}>SIGN UP as TEST</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signUp: (newUser) => dispatch(signUp(newUser)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
