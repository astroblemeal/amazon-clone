import firebase from "firebase";


const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBu2Ym1llSGmf36EpQ_IxEBtn_woE4LmMA",
    authDomain: "clone-9c53b.firebaseapp.com",
    databaseURL: "https://clone-9c53b.firebaseio.com",
    projectId: "clone-9c53b",
    storageBucket: "clone-9c53b.appspot.com",
    messagingSenderId: "860752887434",
    appId: "1:860752887434:web:c0dc4c007494b418857773",
    measurementId: "G-NKFKBTE4GZ"
  });


  const auth = firebaseApp.auth();

  export { auth };

