// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,}from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwJS2H9_lZS1DfsrBaHmIvbPrKI8H8VVo",
  authDomain: "vite-contact-ad204.firebaseapp.com",
  projectId: "vite-contact-ad204",
  storageBucket: "vite-contact-ad204.appspot.com",
  messagingSenderId: "839642309320",
  appId: "1:839642309320:web:dad7ad713adde583a7bbfd"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app);