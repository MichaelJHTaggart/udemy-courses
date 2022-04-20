import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
 apiKey: "AIzaSyBpCeq_BoXIdrL4wxWKCz4Mjn9pQ5MWsXI",
 authDomain: "my-money-3e276.firebaseapp.com",
 projectId: "my-money-3e276",
 storageBucket: "my-money-3e276.appspot.com",
 messagingSenderId: "20879596133",
 appId: "1:20879596133:web:d71aaf28e4abae3c77c48c"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}