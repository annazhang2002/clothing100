// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi4VD2hL3RBptac__PeVsD01KxEdeZsV4",
    authDomain: "quickstart-1590455640998.firebaseapp.com",
    projectId: "quickstart-1590455640998",
    storageBucket: "quickstart-1590455640998.appspot.com",
    messagingSenderId: "818803185452",
    appId: "1:818803185452:web:7d9b092ae6a83166567e89",
    measurementId: "G-66746FZ2TH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { firebase, auth, provider, db };