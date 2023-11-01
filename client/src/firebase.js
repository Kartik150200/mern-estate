// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7a241.firebaseapp.com",
  projectId: "mern-estate-7a241",
  storageBucket: "mern-estate-7a241.appspot.com",
  messagingSenderId: "396611264920",
  appId: "1:396611264920:web:73918f2054ca74f7c38bed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
