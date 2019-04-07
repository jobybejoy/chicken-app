import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignIn } from './SignIn';

import SignedInLinks from './Sign/SignedInLinks'
import SignedOutLinks from './Sign/SignedOutLinks'

class NavBar extends Component {
  render() {
    const { auth } = this.props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
      <div>
        ----------NAVBAR------------
        {links}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('IN NavBAR', state);
  console.log('IN NavBAR CART OBJ', state.cart);

  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(NavBar)
