// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEOHqcwCj6h-qKH3iMCauzuErpyWNVfXQ",
  authDomain: "inventory-system-fa12d.firebaseapp.com",
  projectId: "inventory-system-fa12d",
  storageBucket: "inventory-system-fa12d.firebasestorage.app",
  messagingSenderId: "877329135598",
  appId: "1:877329135598:web:c2a80a6cd905ebe33980ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)