import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD7tQNLmnrBbc5rpNBXjTp7ivQXLxf9olg",
  authDomain: "wily-app-97078.firebaseapp.com",
  databaseURL: "https://wily-app-97078.firebaseio.com",
  projectId: "wily-app-97078",
  storageBucket: "wily-app-97078.appspot.com",
  messagingSenderId: "763138529323",
  appId: "1:763138529323:web:850c125222d88a2bd5326e"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
