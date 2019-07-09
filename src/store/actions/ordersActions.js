const axios = require('axios');

// Admin Action 
export const getAllOrders = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const docRef = getFirestore().collection("orders").orderBy("order_id", "desc")

    docRef.onSnapshot((querySnapshot) => {
      const orders = querySnapshot.docs.map(doc => doc.data());
      dispatch({ type: 'SET_ALL_ORDERS', orders })
    });

  }
}

export const getMyOrders = (user_id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const user = getState().firebase.auth

    const docRef = getFirestore().collection("orders").where('user.uid', "==", user.uid).orderBy("order_id", "desc")

    docRef.onSnapshot((querySnapshot) => {
      const orders = querySnapshot.docs.map(doc => doc.data());
      console.log('MyOrders', orders);

      dispatch({ type: 'SET_MY_ORDERS', orders })
    });
  }
}

const checkPermission = (user, allowed = []) => {
  // const allowed = ['admin', 'user']
  return checkAuthorization(user, allowed)
}

// Gaurd
const checkAuthorization = (user, allowedRoles) => {
  if (!user) return false
  if (!user.roles) return false

  let res = false;
  allowedRoles.map((role) => {
    if (user.roles[role]) {
      res = true
    }
  })
  return res;
}

export const getTheOrder = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // * Only Order by the USER 

    const user = getState().firebase.profile
    console.log('user', user);

    const db = getFirestore()
    const order_id = Number(id)
    const docRef = getFirestore().collection("orders").where("order_id", "==", order_id)

    docRef.onSnapshot((querySnapshot) => {
      const orders = querySnapshot.docs.map(doc => doc.data());
      // dispatch({ type: 'SET_ALL_ORDERS', orders })
      const order = orders[0]
      if (checkPermission(user, ['admin', 'manager']) || order.user.uid === user.uid) {
        // if (true) {
        return dispatch({ type: 'SET_ORDER', order })
      } else {
        return dispatch({ type: 'ORDER_ERROR', error: 'ORDER NOT FOUND' })
      }
    });

    // const orderRef = db.collection('orders')
    //   .where("order_id", "==", order_id).get()
    //   .then((doc) => {

    // if (doc.exists) {
    //   return doc.docs.map(function (documentSnapshot) {
    //     const order = documentSnapshot.data()
    //     console.log('Order in 1st!!!', order);
    //     if (order.user.uid === user.uid) {
    //       return dispatch({ type: 'SET_ORDER', order })
    //     } else {
    //       return dispatch({ type: 'ORDER_ERROR', error: 'ORDER NOT FOUND' })
    //     }
    //   });
    // } else {
    //   console.log("No such document!")

    //   return dispatch({ type: 'ORDER_ERROR', error: 'ORDER NOT FOUND' })
    // }


    // })
    //       .catch ((error) => {
    //   console.log('Some Issues ', error);
    // })
  }
}



export const setCartItems = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const cart = getState().cart
    const items = cart.items
    const total = cart.total

    return dispatch({ type: 'SET_ORDER_ITEMS', items: items, total: total });
  }
}


const PROD_URL = "https://us-central1-chicken-app-dev.cloudfunctions.net/submitOrder"
const LOCAL_URL = "http://localhost:5001/chicken-app-dev/us-central1/submitOrder"

export function postRequest(url, data) {
  return fetch(url, {
    credentials: 'include', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
  })
    .then(response => response.json())
}

export const submitOrder = () => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {

    console.log('Submitting ORDER');

    // const user = getState().firebase.auth

    // const data = { name: 'TEST USER' }

    // fetch(LOCAL_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: {
    //     uid: 'JBOY'
    //   }
    // })
    //   .then((res) => {
    //     console.log('S', res);
    //   })
    //   .catch((err) => {
    //     console.log('ERR', err);
    //   })
    //   ;

    // NOT WORKING
    // postRequest(PROD_URL, { uid: 'dDizlcQxw3RsSGx8F27YFEZ7G7A3' })
    //   .then(data => console.log(data)) // Result from the `response.json()` call
    //   .catch(error => console.error(error))

    axios({
      method: 'post',
      url: LOCAL_URL,
      data: {
        uid: 'dDizlcQxw3RsSGx8F27YFEZ7G7A3'
      }
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });


  }
}

export const submitOrderBKP = () => {

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const orderObj = getState().orders.order

    if (orderObj.delivery_type && orderObj.payment) {
      const auth = getState().firebase.auth

      const firestore = getFirestore();
      const increment = firestore.FieldValue.increment(1);

      let order_id

      const metaRef = firestore.collection('meta').doc('orders')
      const orderRef = firestore.collection('orders').doc()
      const cartRef = firestore.collection('carts').doc(auth.uid)
      // * After Order Submited
      // metaRefupdate({ order_id: increment })

      const batch = firestore.batch()

      // batch.set(statsRef, {storyCount : increment},{merge:true});
      // batch.commit();

      metaRef.get().then(function (doc) {
        if (doc.exists) {
          order_id = doc.data().order_id
          //* dispatch and set the Order_ID
          dispatch({ type: 'SET_ORDER_ID', order_id });
        } else {
          console.log("No Meta such document!");
        }
      })
        .then(() => {
          // * doc the rest of the actioms
          // const timestamp = firestore.FieldValue.serverTimestamp()
          // console.log('Time Stamp'.timestamp);


          // Retrive
          // collectionRef.orderBy('updatedAt').get()
          //     .then(snapshot => {
          //       snapshot.forEach(doc => {
          //             ...
          //         });
          //     })
          //     .catch (err => {
          //   console.log('Error getting documents', err);
          // });

          const user = getState().firebase.auth
          // console.log(user);


          const order = {
            order_id: order_id,
            ...orderObj,
            order_status: 'pending',
            user: {
              uid: user.uid,
              avatarUrl: user.photoURL,
              name: user.displayName,
              email: user.email,
              // number: user.number
            }
            // createdAt: timestamp
          }

          batch.set(orderRef, {
            ...order
          });
          batch.set(cartRef, { items: [], total: 0 })
          batch.set(metaRef, { order_id: increment }, { merge: true });
          batch.commit()

          dispatch({ type: 'RESET_CART' })
          return dispatch({ type: 'SUBMIT_ORDER', order })
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });

    }



  }

}

export const getOrders = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid
    // firestore.collection('orders').where("user.uid", "==", uid)
  }
}



// Increment
// const db = firebase.firestore()
// const increment = firebase.firestore.FieldValue.increment(1);
// const decrement = firebase.firestore.FieldValue.increment(-1);

// const storyRef = db.collection('stories').doc('hello-world');
// storyRef.update({ count: increment });


// const batch = db.batch()
// batch.set(storyRef,{title:'new story'});
// batch.set(statsRef, {storyCount : increment},{merge:true});
// batch.commit();
