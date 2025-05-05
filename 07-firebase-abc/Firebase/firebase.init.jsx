import { getAuth } from "firebase/auth";




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2_sCPa6UgvODuD9gXRXhjEdkgi9107a8",
  authDomain: "fir-abc-3e2ab.firebaseapp.com",
  projectId: "fir-abc-3e2ab",
  storageBucket: "fir-abc-3e2ab.firebasestorage.app",
  messagingSenderId: "37542931870",
  appId: "1:37542931870:web:981001d51afe575cf8ba8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);