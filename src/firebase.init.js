// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDftyLhPQ73TZFJtFZKFIoDKHNnjMKl7tg",
  authDomain: "genius-car-service-639f1.firebaseapp.com",
  projectId: "genius-car-service-639f1",
  storageBucket: "genius-car-service-639f1.appspot.com",
  messagingSenderId: "868313390124",
  appId: "1:868313390124:web:583e4fe2354dbdea614589",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
