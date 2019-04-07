import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'

import ReduxThunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import FirebaseConfig from './config/firebaseConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(ReduxThunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(FirebaseConfig),
    reactReduxFirebase(FirebaseConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
})


