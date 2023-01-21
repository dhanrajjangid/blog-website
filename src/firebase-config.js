import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgCNYY29Fa-sAg4I3_qsB3bEaBgjz1Mv4",
  authDomain: "fir-crud-9d788.firebaseapp.com",
  projectId: "fir-crud-9d788",
  storageBucket: "fir-crud-9d788.appspot.com",
  messagingSenderId: "1094331005508",
  appId: "1:1094331005508:web:d3696d2f6382b747071a11",
  measurementId: "G-JLEPJGTW28"
};


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();
  export const storage = getStorage();
