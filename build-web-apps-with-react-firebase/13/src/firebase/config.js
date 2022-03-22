import firebase from 'firebase/app';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAepCxCD3ODn5V2i15MBTDED05XOH6CPWA",
  authDomain: "cooking-ninja-site-2135e.firebaseapp.com",
  projectId: "cooking-ninja-site-2135e",
  storageBucket: "cooking-ninja-site-2135e.appspot.com",
  messagingSenderId: "158263046054",
  appId: "1:158263046054:web:7e09c8f00975744dde6967"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
