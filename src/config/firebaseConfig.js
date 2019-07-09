import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBiJWGAHv79c27frgUgIG3WbTa3vSSyp9A",
  authDomain: "chicken-app-dev.firebaseapp.com",
  databaseURL: "https://chicken-app-dev.firebaseio.com",
  projectId: "chicken-app-dev",
  storageBucket: "chicken-app-dev.appspot.com",
  messagingSenderId: "1085698517998"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true })
firebase.firestore();

export default firebase;