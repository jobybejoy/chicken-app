import authReducer from './authReducer'
import itemsReducer from './itemsReducer'
import cartReducer from './cartReducer'
import userReducer from './userReducer'

import { combineReducers } from 'redux'

import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  cart: cartReducer,
  user: userReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer