import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg0Z6Z_vfmi63mCSUbUJrEyarh7phwiXE",
    authDomain: "aushadhivan-90dd7.firebaseapp.com",
    projectId: "aushadhivan-90dd7",
    storageBucket: "aushadhivan-90dd7.appspot.com",
    messagingSenderId: "863901232275",
    appId: "1:863901232275:web:81bae0dbe1a2d18bbf7166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // ✅ Properly defined

export { auth, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword };
