// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7LUx74XdatQ4DycpEq-GhDnRMQpvwhl0",
  authDomain: "email-pass-07.firebaseapp.com",
  projectId: "email-pass-07",
  storageBucket: "email-pass-07.firebasestorage.app",
  messagingSenderId: "487943815219",
  appId: "1:487943815219:web:8178b96864dddf0939e346"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);