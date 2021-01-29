import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQAK3yc6XKiIfgZaMuH6gDS64C3rQmkfE",
  authDomain: "crwn-db-fd06d.firebaseapp.com",
  projectId: "crwn-db-fd06d",
  storageBucket: "crwn-db-fd06d.appspot.com",
  messagingSenderId: "1045227740028",
  appId: "1:1045227740028:web:9db19f2a81f8137930a2f9",
  measurementId: "G-X53XFM7TF1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoole = () => auth.signInWithPopup(provider);
