// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXZoraMm4aG2B5WcB8nao8O7ooLScXQjU",
  authDomain: "vba-project-d3773.firebaseapp.com",
  projectId: "vba-project-d3773",
  storageBucket: "vba-project-d3773.appspot.com",
  messagingSenderId: "177699236777",
  appId: "1:177699236777:web:95d3a4038e9f580e4032b8",
  measurementId: "G-GPJTGK91WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
