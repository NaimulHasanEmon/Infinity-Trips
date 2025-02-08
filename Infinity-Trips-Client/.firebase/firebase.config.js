// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuSCuVGHRb3ArXDHSD7p6gw5V1bYz_Btg",
  authDomain: "infinity-trips.firebaseapp.com",
  projectId: "infinity-trips",
  storageBucket: "infinity-trips.firebasestorage.app",
  messagingSenderId: "1039017851525",
  appId: "1:1039017851525:web:c55890e3dfb94b227047ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
