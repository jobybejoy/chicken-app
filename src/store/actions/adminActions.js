export const getAllUsers = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const docRef = getFirestore().collection("users")
    // .orderBy("createdAt", "desc")

    docRef.onSnapshot((querySnapshot) => {
      const users = querySnapshot.docs.map(doc => { return { uid: doc.id, ...doc.data() } });
      dispatch({ type: 'SET_ALL_USERS', users })
    });

  }
}

export const getAllAdmins = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const docRef = getFirestore().collection("users").where('roles.admin', '==', true)
    // .orderBy("createdAt", "desc")

    docRef.onSnapshot((querySnapshot) => {
      const admins = querySnapshot.docs.map(doc => { return { uid: doc.id, ...doc.data() } });
      dispatch({ type: 'SET_ALL_ADMINS', admins })
    });

  }
}

export const getAllManagers = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const docRef = getFirestore().collection("users").where('roles.manager', '==', true)
    // .orderBy("createdAt", "desc")

    docRef.onSnapshot((querySnapshot) => {
      const managers = querySnapshot.docs.map(doc => { return { uid: doc.id, ...doc.data() } });
      dispatch({ type: 'SET_ALL_MANAGERS', managers })
    });

  }
}

export const getAllDeliveryBoys = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const docRef = getFirestore().collection("users").where('roles.deliveryBoy', '==', true)
    // .orderBy("createdAt", "desc")

    docRef.onSnapshot((querySnapshot) => {
      const deliveryBoys = querySnapshot.docs.map(doc => { return { uid: doc.id, ...doc.data() } });
      dispatch({ type: 'SET_ALL_DELIVERYBOYS', deliveryBoys })
    });

  }
}

export const getTheUser = (uid) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const docRef = getFirestore().collection("users").doc(uid)
      .onSnapshot(function (doc) {
        if (!doc.exists) {
          console.log('No such document!');
          dispatch({ type: 'ERROR', error: 'User Not Found' })
        } else {
          const user = { uid, ...doc.data() }
          dispatch({ type: 'SET_USER_PROFILE', user })
        }
      });
  }
}

export const addItem = (newItem) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const user = getState().firebase.profile
    if (user.roles.admin || user.roles.manager) {
      // Created by and edited by details

      const docRef = getFirestore().collection('items').doc()

      const imageFile = newItem.image
      const arr = imageFile.name.split('.')
      const ext = arr[arr.length - 1]


      var storageRef = getFirebase().storage().ref();
      var itemImagesRef = storageRef.child('items/' + docRef.id + '.' + ext);

      itemImagesRef.put(imageFile).then(function (snapshot) {
        snapshot.ref.getDownloadURL().then(function (url) {
          const add = docRef.set({
            id: docRef.id,
            name: newItem.name,
            url: url,
            subItems: newItem.subItems,
            createdAt: getFirestore().FieldValue.serverTimestamp()
          })
        })
      });
      // then add items count in meta and 
    } else {
      // Unauthorized to create an item
    }

  }
}

export const getAllMetaData = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const docRef = getFirestore().collection('meta').doc('all')
      .onSnapshot(function (doc) {
        if (!doc.exists) {
          console.log('No such document!');
          dispatch({ type: 'ERROR', error: 'Meta Not Found' })
        } else {
          const meta = { ...doc.data() }
          dispatch({ type: 'SET_META_DATA', meta })
        }
      });
  }
}

export const toggleRole = (uid, role) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const userRef = getFirestore().collection("users").doc(uid)
    const getUser = userRef.get()
      .then((doc) => {
        if (!doc.exists) {
          throw "Document does not exist!";
        }
        var currentRoleState
        var user = { uid, ...doc.data() }
        if (user.roles && user.roles[role] !== undefined) {
          currentRoleState = user.roles[role]
          user.roles[role] = !currentRoleState
          userRef.update({ [`roles.${role}`]: !currentRoleState })
          console.log("Transaction successfully committed!");
          dispatch({ type: 'SET_USER_ROLES', roles: user.roles })
        } else {
          dispatch({ type: 'ERROR', error: 'User Doesnt Have the role' })
        }

      })
  }
}

export const addRole = (uid, role) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const newRole = role.value

    const user = getState().admin.userProfile

    const userRef = getFirestore().collection("users").doc(uid)
    userRef.update({ [`roles.${newRole}`]: true })
      .then(() => {
        dispatch({ type: 'SET_USER_ROLES', roles: { ...user.roles, [`${newRole}`]: true } })
      })
  }
}

export const changeOrderStatus = (id, newStatus) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const status = newStatus.value
    const order_id = Number(id)

    const ordersRef = getFirestore().collection("orders")
    ordersRef
      .where('order_id', '==', order_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          ordersRef.doc(doc.id)
            .update({ status: status })
          dispatch({ type: 'ORDER_STATUS_UPDATE_SUCCESS', success: 'Order Status has been Updated !! 🙌 ' })
        });
      })
      ;


  }
}
