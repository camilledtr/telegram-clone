import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCm86ca4dlI5SfEF5yg9G1XypQQtWH35n8",
  authDomain: "telegram-clone-67a4e.firebaseapp.com",
  projectId: "telegram-clone-67a4e",
  storageBucket: "telegram-clone-67a4e.appspot.com",
  messagingSenderId: "320733632717",
  appId: "1:320733632717:web:2d9d160ad53ebf9e85f184"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }
