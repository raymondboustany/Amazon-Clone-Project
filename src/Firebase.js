// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//connecting firebase to the front end 
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBYqv8d6q7ezjw1ndChdYqG430BlTOsm3A",
    authDomain: "clone-1d74d.firebaseapp.com",
    projectId: "clone-1d74d",
    storageBucket: "clone-1d74d.appspot.com",
    messagingSenderId: "83795206841",
    appId: "1:83795206841:web:39c57977eff4bcecc77168",
    measurementId: "G-6KXSJBXFD2"
  };

  const auth = firebase.auth();

  export {auth};