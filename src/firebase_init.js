// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2-ODOq5RyvT2xs6VwAJwPXWuq85KXOcQ",
  authDomain: "simple-firebase-2cb6e.firebaseapp.com",
  projectId: "simple-firebase-2cb6e",
  storageBucket: "simple-firebase-2cb6e.firebasestorage.app",
  messagingSenderId: "1098965223875",
  appId: "1:1098965223875:web:0810a1e61a434ce83e1576",
  measurementId: "G-TSW75MQ883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
export default auth;