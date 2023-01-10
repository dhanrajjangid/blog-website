import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUQjFQ8ZHk1gWN3mS8UcUbRd-0r-fOmDc",
    authDomain: "blog-website-67bfc.firebaseapp.com",
    projectId: "blog-website-67bfc",
    storageBucket: "blog-website-67bfc.appspot.com",
    messagingSenderId: "994107072021",
    appId: "1:994107072021:web:755aaa256d7910bd94381c",
    measurementId: "G-RMRHQB32JP"
  };


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
