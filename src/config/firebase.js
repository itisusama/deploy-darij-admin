import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByKQC--TVRylAyEdNkcVQyCQ5uJl_Hxlk",
  authDomain: "darig-test.firebaseapp.com",
  projectId: "darig-test",
  storageBucket: "darig-test.firebasestorage.app",
  messagingSenderId: "164567291728",
  appId: "1:164567291728:web:c9a5d609039e5580eb7e55",
  measurementId: "G-YDVMM771BD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);