// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Xo4GEvwnPj-cJRiYTTWa6EyKZhaYC_4",
  authDomain: "car-wheel-assignment.firebaseapp.com",
  projectId: "car-wheel-assignment",
  storageBucket: "car-wheel-assignment.appspot.com",
  messagingSenderId: "13220842842",
  appId: "1:13220842842:web:4d42cf1f0faeb634547763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;