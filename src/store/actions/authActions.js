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

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
  }
}

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


