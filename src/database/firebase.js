import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'
//import firebase from '@react-native-firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyD42CJcT4xdTKeMRYuyI35BHMGPaEuBw3g",
    authDomain: "aneesv2.firebaseapp.com",
    databaseURL: "https://aneesv2.firebaseio.com",
    projectId: "aneesv2",
    storageBucket: "aneesv2.appspot.com",
    messagingSenderId: "1022621620553",
    appId: "1:1022621620553:web:ee433c523539c3b8532298"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;