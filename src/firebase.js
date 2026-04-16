// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2WS7zXLbVeYC-dzFijZwdERKdCRPSIwg",
  authDomain: "recourcify.firebaseapp.com",
  databaseURL: "https://recourcify-default-rtdb.firebaseio.com",
  projectId: "recourcify",
  storageBucket: "recourcify.firebasestorage.app",
  messagingSenderId: "757914024247",
  appId: "1:757914024247:web:934b1a88404c359b0642b2",
  measurementId: "G-YZPNHP45KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);