import firebase from "firebase"
import 'firebase/firestore'
var firebaseConfig = {
  apiKey: "AIzaSyBrDkDap8AB0lMi1YaYW22MeixdoWeqSUo",
  authDomain: "login-c09aa.firebaseapp.com",
  projectId: "login-c09aa",
  storageBucket: "login-c09aa.appspot.com",
  messagingSenderId: "132968838770",
  appId: "1:132968838770:web:047b5f7d2c1cb2598134eb"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
var database = firebase.database();
//export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
const db=firebase.firestore;

export default fire;