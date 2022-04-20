import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
 apiKey: "AIzaSyCLhj6SMa4YucqkYtruwBst0WSa6BNQnwk",
 authDomain: "thedojosite-b4b99.firebaseapp.com",
 projectId: "thedojosite-b4b99",
 storageBucket: "thedojosite-b4b99.appspot.com",
 messagingSenderId: "358733986332",
 appId: "1:358733986332:web:cb2930d7f9c7267853bdd9"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage}