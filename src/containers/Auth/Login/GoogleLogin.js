import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import './styles.css'

import SocialButton from '../../../components/Atoms/Button/SocialLoginButton'
import Form from '../../../components/Molecules/Form/LabeledForm'


import { signUpWithGoogle, signOut } from '../../../store/actions/authActions'

import MiniProfile from '../../../components/Organisms/Profile/MiniProfile'
import Text from '../../../components/Atoms/Text'
import Button from '../../../components/Atoms/Button'

import { userPhoneNumber } from '../../../store/actions/userActions'

import NextIcon from '@material-ui/icons/KeyboardArrowRight'


// export function LoginPage({ firebase, auth, props }) {
// TODO Add Internationalised button

export class LoginPage extends Component {

  state = {
    phoneNumber: "",
    error: false,
    errorMessage: "",
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // if (this.props.auth.uid) {
    //   return <Redirect to='/' />
    // }
  }

  // addAdminReq() {
  //   this.props.setAsAdmin()
  // }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    // alert('A number was submitted: ' + this.state.phoneNumber);
    // this.props.firebase.updateProfile({ phoneNumber: this.state.phoneNumber })
    if (this.state.phoneNumber !== "") {
      this.setState({
        error: false,
        errorMessage: ''
      })
      this.props.userPhoneNumber(this.state.phoneNumber)
    } else {
      this.setState({
        error: true,
        errorMessage: 'Valid Number is required'
      })
    }
  }

  getRedirect(roles) {
    if (roles.admin) {
      return this.props.history.push('/admin/dashboard')
    }
    if (roles.manager) {
      return this.props.history.push('/manager/dashboard');
    }
    if (roles.deliveryBoy) {
      return this.props.history.push('/delivery/boy/dashboard')
    }
    if (roles.user) {
      return this.props.history.push('/')
    }
  }

  render() {
    console.log(this.props);

    const { auth, profile } = this.props

    const { error, errorMessage } = this.state

    return (
      <div >
        {/* <button onClick={() => { this.addAdminReq() }}>
          HEY ADMIN
        </button> */}
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
                          provider={profile.providerData ? profile.providerData[0].providerId : 'Facebook.com'}
                        >

                          {
                            !profile.phoneNumber ?
                              <React.Fragment>
                                {/* <form onSubmit={this.handleSubmit}> */}
                                <Form name="phoneNumber" type="TEL" placeholder={'Mobile Number'}
                                  label={'Mobile Number'} helperText={errorMessage || 'Must Be a Mobile Number!!'} helperType={error ? "ERROR" : "default"}
                                  value={this.state.phoneNumber} onChange={(e) => this.handleChange(e)} required />
                                <div className="nextPage">
                                  <Button varient="FAB" onClick={() => {
                                    this.handleSubmit()
                                    // this.props.history.push('/')
                                  }}>
                                    <NextIcon />
                                  </Button>
                                </div>
                                {/* </form> */}
                              </React.Fragment>
                              :
                              <React.Fragment>
                                <Text className={"email phn"} component="div" varient="body" >{profile.phoneNumber}</Text>
                                <div className="nextPage">
                                  <Button varient="FAB" onClick={() => {
                                    this.getRedirect(profile.roles)
                                  }}>
                                    <NextIcon />
                                  </Button>
                                </div>
                              </React.Fragment>
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
    signOut: () => dispatch(signOut()),
    userPhoneNumber: (number) => dispatch(userPhoneNumber(number)),
    // setAsAdmin: () => dispatch(setAsAdmin()),
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