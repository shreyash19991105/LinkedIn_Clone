// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo7W1WSi9xxq2OGeC9BFxVXYQROtN9Dvo",
  authDomain: "linkedin-clone-f59f8.firebaseapp.com",
  projectId: "linkedin-clone-f59f8",
  storageBucket: "linkedin-clone-f59f8.appspot.com",
  messagingSenderId: "552730757138",
  appId: "1:552730757138:web:3930514473b5f06b05f0cb",
  measurementId: "G-GB7VGS9XJ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { app, auth, firestore };
