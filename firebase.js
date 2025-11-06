// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMwg3EKqadonXQKafVEGeaZ9Bb92li6JU",
  authDomain: "onlypan-2b80b.firebaseapp.com",
  projectId: "onlypan-2b80b",
  storageBucket: "onlypan-2b80b.firebasestorage.app",
  messagingSenderId: "61969045493",
  appId: "1:61969045493:web:38e182d708b52273ac32bc",
  measurementId: "G-W0RDF2CQM0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
