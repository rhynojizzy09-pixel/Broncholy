// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrjKzaH9YA9BlIQB-O9rFDuQ7Yt28jrGw",
  authDomain: "game-632ae.firebaseapp.com",
  projectId: "game-632ae",
  storageBucket: "game-632ae.firebasestorage.app",
  messagingSenderId: "338985134130",
  appId: "1:338985134130:web:9dbba5728365b6afb7b42b",
  measurementId: "G-QJ9H5ZGTKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);