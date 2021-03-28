import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBQAK3yc6XKiIfgZaMuH6gDS64C3rQmkfE",
  authDomain: "crwn-db-fd06d.firebaseapp.com",
  projectId: "crwn-db-fd06d",
  storageBucket: "crwn-db-fd06d.appspot.com",
  messagingSenderId: "1045227740028",
  appId: "1:1045227740028:web:9db19f2a81f8137930a2f9",
  measurementId: "G-X53XFM7TF1",
};

// this function is called in App.js
// method for create user profile document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //! If the user is already registered
  if (!userAuth) return;

  //! the user is not yet registered
  const userRef = firestore.doc(`users/${userAuth.uid}`); // get userRef
  const snapShot = await userRef.get(); // to check userRef exist or not

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth(); // GET auth from firebase
export const firestore = firebase.firestore(); // Get firestore from firebase

const provider = new firebase.auth.GoogleAuthProvider(); // get google auth provider from auth

provider.setCustomParameters({ prompt: "select_account" }); // set custom google auth

export const signInWithGoogle = () => auth.signInWithPopup(provider); // export method signInWithGoogle

export default firebase;
