// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6MyCREnm9Pfok-eGR9AH0Exul-ovRcIg",
  authDomain: "digital-document-manager-c9643.firebaseapp.com",
  projectId: "digital-document-manager-c9643",
  storageBucket: "digital-document-manager-c9643.appspot.com",
  messagingSenderId: "190286907757",
  appId: "1:190286907757:web:0bb441ca0db9298943b264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)