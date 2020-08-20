import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUh6g73YNQ4Z4o6Cyoh2ahEyRSLZ8vYrI",
    authDomain: "twitter-clone-c1358.firebaseapp.com",
    databaseURL: "https://twitter-clone-c1358.firebaseio.com",
    projectId: "twitter-clone-c1358",
    storageBucket: "twitter-clone-c1358.appspot.com",
    messagingSenderId: "861587886581",
    appId: "1:861587886581:web:2f089c24e15635fd6d50bc",
    measurementId: "G-19CKMXZRF2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;