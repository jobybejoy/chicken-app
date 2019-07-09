
const axios = require('axios')

export const createItem = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    //make async call to DB
    const firestore = getFirestore();

    firestore.collection('items').add({
      ...item,
      creatorName: 'John Doe',
      creatorId: 123456,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_ITEM', item: item })
    }).catch((error) => {
      dispatch({ type: 'CREATE_ITEM_ERROR', error: error })
    })

  }
}

export const isAuthedPrivilegedUser = () => {
  //   console.log('Pinged prive');

  //   return async (dispatch, getState, { getFirebase, getFirestore }) => {
  //     const user = getFirebase().auth().currentUser;
  //     const idTokenResult = await user.getIdTokenResult();
  //     console.log('Got priv');
  //     return idTokenResult.claims.admin
  //   }
}

// export const setAsAdmin = () => {

//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     console.log('Admin Request');

//     axios({
//       method: 'post',
//       // url: 'https://us-central1-chicken-app-dev.cloudfunctions.net/addAdminRole',
//       url: 'http://localhost:5001/chicken-app-dev/us-central1/addAdminRole',
//       data: {
//         email: 'dev.in.karunya@gmail.com'
//       }
//     })
//       .then(function (response) {
//         // handle success
//         console.log(response);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//   }
// }

export const userPhoneNumber = (number) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const uid = getState().firebase.auth.uid

    firestore.collection('users').doc(uid).update({
      phoneNumber: number,
      updatedAt: firestore.FieldValue.serverTimestamp()
    })

  }
}

export const getUserLocations = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const uid = getState().firebase.auth.uid

    const u = firestore.collection("users").doc(uid).get()
      .then((doc) => {
        const user = doc.data()
        if (user.locations) {
          dispatch({ type: 'SET_LOCATION', locations: user.locations })
          console.log('user location defined', user.locations);
        } else {
          // console.log('user location not defined');
          dispatch({ type: 'SET_LOCATION', locations: [] })
        }
      })

  }
}

export const addUserLocation = (location) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore()
    const uid = getState().firebase.auth.uid

    const locations = getState().user.locations

    const userRef = firestore.collection("users").doc(uid);

    const newLocations = [
      ...locations,
      location
    ]

    dispatch({ type: 'SET_LOCATION', locations: newLocations })

    userRef
      .set(
        { locations: newLocations },
        { merge: true }
      )
  }
}

export const changeCurrentRole = (role) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const uid = getState().firebase.auth.uid
    const roles = getState().firebase.profile.roles
    if (roles[role] === true) {
      const userRef = getFirestore().collection('users').doc(uid)
      userRef.update({ 'roles.currentRole': role })
    }
  }
}