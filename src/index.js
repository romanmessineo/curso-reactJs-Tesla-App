import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcTe7PxytQcwSP8yJgbIEDnRRwMjzUVcM",
  authDomain: "tesla-store-93a1f.firebaseapp.com",
  projectId: "tesla-store-93a1f",
  storageBucket: "tesla-store-93a1f.appspot.com",
  messagingSenderId: "820324437216",
  appId: "1:820324437216:web:fec63b75f7a112c3ff5485"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


