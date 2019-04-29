import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import './styles.css'

import SocialButton from '../../../components/Atoms/Button/SocialLoginButton'
import Form from '../../../components/Molecules/Form/LabeledForm'


import { signUpWithGoogle, signOut } from '../../../store/actions/authActions'

import MiniProfile from '../../../components/Organisms/Profile/MiniProfile'
import Text from '../../../components/Atoms/Text'
import Button from '../../../components/Atoms/Button'

import NextIcon from '@material-ui/icons/KeyboardArrowRight'

// export function LoginPage({ firebase, auth, props }) {
// TODO Add Internationalised button

export class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = { number: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ number: event.target.number });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.number);
    event.preventDefault();
  }

  render() {
    console.log(this.props);

    const { auth, profile } = this.props

    return (
      <div >
        <div>
          {/* <h2>Auth</h2> */}
          {/* {
            !isLoaded(this.props.auth)
              ? <span>Loading...</span>
              : isEmpty(this.props.auth)
                ? <span>Not Authed</span>
                : <pre>{JSON.stringify(this.props.auth, null, 2)}</pre>
          } */}

          {
            !isLoaded(this.props.auth)
              ? <span>Loading...</span>
              :
              isEmpty(this.props.auth)
                ?
                <React.Fragment>
                  {/* NOT Authenticated */}
                  <div className="unauthed container">
                    <div className="banner">

                    </div>
                    <SocialButton onClick={() => {
                      this.props.signWithGoogle();
                    }} />
                    <SocialButton provider="Facebook" onClick={() => {
                      this.props.firebase.login({ provider: 'facebook', type: 'popup' })
                    }} />
                  </div>
                </React.Fragment>
                :
                <React.Fragment>
                  {/* Authenticated */}
                  <button onClick={this.props.signOut}>LOGOUT</button>
                  <div className="authed container">
                    {
                      !isLoaded(profile) ?
                        <MiniProfile loading={true} />
                        :
                        <MiniProfile
                          url={profile.avatarUrl}
                          name={profile.displayName}
                          email={profile.email}
                          provider={profile.providerData[0].providerId}
                        >

                          {
                            !profile.phoneNumber ?
                              <React.Fragment>
                                <form onSubmit={this.handleSubmit}>
                                  <Form value={this.state.number} onChange={this.handleChange} name="phoneNumber" type="TEL" placeholder={'Mobile Number'} label={'Mobile Number'} helperText={'Must Be a Valid Name!!'} />
                                  <div className="nextPage">
                                    <Button varient="FAB" onClick={() => {
                                      // this.props.history.push('/google/2')
                                      this.handleSubmit()
                                    }}>
                                      <NextIcon />
                                    </Button>
                                  </div>
                                </form>
                              </React.Fragment>
                              :
                              <Text className={"email "} component="div" varient="body" >{profile.phoneNumber}</Text>
                          }

                        </MiniProfile>
                    }
                  </div>
                </React.Fragment>
          }


        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired
  }),
  auth: PropTypes.object
}

const MapStateToProps = (state) => {

  return {
    // items: state.firestore.ordered.items,
    cart: state.cart,
    items: state.items.items,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signWithGoogle: () => dispatch(signUpWithGoogle()),
    signOut: () => dispatch(signOut())
  }
}

// export default compose(
//   connect(MapStateToProps),
// )(App)


export default compose(
  withFirebase,
  // connect(({ firebase: { auth } }) => ({ auth }))
  connect(MapStateToProps, mapDispatchToProps),
)(LoginPage)