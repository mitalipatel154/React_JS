// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2we29FaqDShtrtIqXQvU2s3k9NFn0BqI",
  authDomain: "fir-auth-171a8.firebaseapp.com",
  projectId: "fir-auth-171a8",
  storageBucket: "fir-auth-171a8.firebasestorage.app",
  messagingSenderId: "504635121801",
  appId: "1:504635121801:web:b6ccb65131e9958bf86658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)