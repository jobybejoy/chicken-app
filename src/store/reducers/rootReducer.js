import authReducer from './authReducer'
import itemsReducer from './itemsReducer'
import cartReducer from './cartReducer'
import userReducer from './userReducer'
import ordersReducer from './ordersReducer'
import adminReducer from './adminReducer'

import { combineReducers } from 'redux'

import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  items: itemsReducer,
  cart: cartReducer,
  user: userReducer,
  orders: ordersReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer