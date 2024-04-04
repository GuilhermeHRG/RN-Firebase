// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1rxRAikka93qJLtI2uewoWK3T0tvDI6w",
  authDomain: "react-firebase-ebdf8.firebaseapp.com",
  projectId: "react-firebase-ebdf8",
  storageBucket: "react-firebase-ebdf8.appspot.com",
  messagingSenderId: "337360716206",
  appId: "1:337360716206:web:b6920d8c2d2b11b870083f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;