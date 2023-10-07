// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu0_5SeSJdEtQE9wgotkUvmr_PTuCEc1Y",
  authDomain: "react-disney-plus-app-543ef.firebaseapp.com",
  projectId: "react-disney-plus-app-543ef",
  storageBucket: "react-disney-plus-app-543ef.appspot.com",
  messagingSenderId: "357578696080",
  appId: "1:357578696080:web:67091ebbfc1201b59f7f15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;