import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SignIn from '../SignIn'

export class SignedOutLinks extends Component {

  render() {
    return (
      <div>
        SIGNED OUT LINKS
        <SignIn></SignIn>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutLinks)
