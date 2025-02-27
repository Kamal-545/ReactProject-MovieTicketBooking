import { initializeApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy7ZjtyAwPuoea-cbSX_jdlnGN7-NKkX4",
  authDomain: "movies-data-ba07a.firebaseapp.com",
  projectId: "movies-data-ba07a",
  storageBucket: "movies-data-ba07a.firebasestorage.app",
  messagingSenderId: "891407110027",
  appId: "1:891407110027:web:22770b562dd83a83d7a98e",
  measurementId: "G-PM9DHV216E"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db=getFirestore(app);

export default db ;