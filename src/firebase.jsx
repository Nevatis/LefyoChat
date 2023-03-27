// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6fvurOM6a9YJjIL7BKSvJGUvMGYbbNds",
  authDomain: "lefyochat.firebaseapp.com",
  projectId: "lefyochat",
  storageBucket: "lefyochat.appspot.com",
  messagingSenderId: "294948895712",
  appId: "1:294948895712:web:3ba46e7e1d93ad17330985",
  measurementId: "G-KYVCPCHBH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

