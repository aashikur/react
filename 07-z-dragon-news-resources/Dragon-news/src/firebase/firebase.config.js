// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDi0PKP0lZoG7LWtFjIMBlI5HVVyaZwjM",
  authDomain: "dragon-news-ashik.firebaseapp.com",
  projectId: "dragon-news-ashik",
  storageBucket: "dragon-news-ashik.firebasestorage.app",
  messagingSenderId: "707892888718",
  appId: "1:707892888718:web:d135c270eb8727cde735df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;