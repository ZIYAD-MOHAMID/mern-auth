// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-f66bf.firebaseapp.com",
  projectId: "mern-stack-f66bf",
  storageBucket: "mern-stack-f66bf.firebasestorage.app",
  messagingSenderId: "796040767930",
  appId: "1:796040767930:web:9bd070c419eae314d61583",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
