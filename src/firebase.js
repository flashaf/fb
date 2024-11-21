// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7j6ZedB0XYXCmYhYks-F0h7_ahZn-k7A",
  authDomain: "auth-app-e5278.firebaseapp.com",
  projectId: "auth-app-e5278",
  storageBucket: "auth-app-e5278.firebasestorage.app",
  messagingSenderId: "979706067277",
  appId: "1:979706067277:web:75917e7a6ee3e4c98e9f04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
