// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("helo");
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ebd6a.firebaseapp.com",
  projectId: "mern-blog-ebd6a",
  storageBucket: "mern-blog-ebd6a.appspot.com",
  messagingSenderId: "540242290204",
  appId: "1:540242290204:web:936448f34634e925b4a1d9"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);