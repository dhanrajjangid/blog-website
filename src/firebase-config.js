import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyrHWYx3oFvuvQs6g3SzL3AVoL4KaniSw",
  authDomain: "blog-website-810ec.firebaseapp.com",
  projectId: "blog-website-810ec",
  storageBucket: "blog-website-810ec.appspot.com",
  messagingSenderId: "624900235835",
  appId: "1:624900235835:web:4658067dad6ebf49bfb21e",
  measurementId: "G-LYHG89JM97"
};


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
  export const storage = getStorage();
