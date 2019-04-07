import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions'

class SignedInLinks extends Component {

  render() {
    console.log('IN SIGNEDLINKS', this.props);

    return (
      <div>
        SIGNED IN LINKS
        <button onClick={this.props.signOut}>LOGOUT</button>
      </div >
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
