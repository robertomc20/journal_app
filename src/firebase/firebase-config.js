import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFIRB_sENWAdmkha_cnYSBUXIH0TMDWNE",
  authDomain: "react-app-practice-d1b9f.firebaseapp.com",
  projectId: "react-app-practice-d1b9f",
  storageBucket: "react-app-practice-d1b9f.appspot.com",
  messagingSenderId: "157363934290",
  appId: "1:157363934290:web:9a68071a4205083ba3fb8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}