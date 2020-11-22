import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBFKAfyPisA7BXHmEfSy1IbheZqpq_c4Ls",
  authDomain: "twitter-clone-38df7.firebaseapp.com",
  databaseURL: "https://twitter-clone-38df7.firebaseio.com",
  projectId: "twitter-clone-38df7",
  storageBucket: "twitter-clone-38df7.appspot.com",
  messagingSenderId: "1015248632856",
  appId: "1:1015248632856:web:75ceba7557a23358e2d76d",
  measurementId: "G-P0PN0HLQWD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
