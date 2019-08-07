import firebase from 'firebase/app'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBi3PjZtspeRGGhYhCc2Ny5WBrDIetSvuU",
    authDomain: "reactproject-7d424.firebaseapp.com",
    databaseURL: "https://reactproject-7d424.firebaseio.com",
    projectId: "reactproject-7d424",
    storageBucket: "",
    messagingSenderId: "485178571368",
    appId: "1:485178571368:web:58faf7e8e7ffa4bd"
  };
export default firebase.initializeApp(firebaseConfig);