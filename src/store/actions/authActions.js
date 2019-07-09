
// *Login With email and password (NotUsed)
export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    //Auth with email and password
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch((error) => {
      dispatch({ type: 'LOGIN_ERROR', error: error })
    })
  }
}

// * Sign Out or Logout
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
  }
}

// *Sign Up using email and passowrd
// Address [ CompleteAddress,Nearest Landmark,Location Name ] , Mobile Numbers ,
export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((response) => {
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((error) => {
      dispatch({ type: 'SIGNUP_ERROR', error });
    })
  }
}

// * SignUp with Google
export const signUpWithGoogle = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log('Logging In With Google')
    return getFirebase().login({ provider: 'google', type: 'popup' })
      .then((response) => {
        console.log('Google Login Success', response);
      })
      .catch((error) => {
        console.log('Google Login Failed', error);

      })

  }
}


