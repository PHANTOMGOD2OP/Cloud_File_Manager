// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cloudguruji.firebaseapp.com",
  projectId: "cloudguruji",
  storageBucket: "cloudguruji.appspot.com",
  messagingSenderId: "937448206734",
  appId: "1:937448206734:web:dc711c764e9c07d9f6f4df",
  measurementId: "G-8NGYDCBTH0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
