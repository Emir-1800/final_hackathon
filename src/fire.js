import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd5vduw7WH4Yk4-Kx9U6kInee7r13LRlk",
  authDomain: "final-80eab.firebaseapp.com",
  projectId: "final-80eab",
  storageBucket: "final-80eab.appspot.com",
  messagingSenderId: "29123244989",
  appId: "1:29123244989:web:73e3a7b79b7dbd6156d8d4",
  measurementId: "G-01QKK25F84",
};

// Инициализируем Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
