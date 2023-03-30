// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoHm5GILDGnpBLPiF0Dqy4xBNYv1o7pEc",
  authDomain: "chatmakerslab.firebaseapp.com",
  projectId: "chatmakerslab",
  storageBucket: "chatmakerslab.appspot.com",
  messagingSenderId: "510187451925",
  appId: "1:510187451925:web:b0c5bc76775e35d318401c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
