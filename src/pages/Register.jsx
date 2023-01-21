import { React, useState } from 'react';
import { db, auth, storage, provider} from "../firebase-config"
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref } from "firebase/storage";
import { collection, doc, addDoc, setDoc } from 'firebase/firestore';

function Register({setIsAuth}) {

  let navigate = useNavigate();

  const [err, setErr] = useState(false);

  const userCollectionRef = collection (db, "users");

  const handleSubmit = async (e) => {
    e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

    try{
        const res = await createUserWithEmailAndPassword (auth, email, password)
        .then( async () => {

            await addDoc(userCollectionRef, {
                name: displayName,
                email,
            })
            
        })

        const storageRef = ref(storage, displayName);

    


    } catch(error){
        setErr(true);
    }

     
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    navigate("/");

  }

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    
      <div className='loginPage'>
        <div className="emailLogin">
        <span className="title">Sign Up</span>
          
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Display Name...'/>

              <input type="email" placeholder='Email...'/>
              <input type="password" placeholder='Password...'/>
              <button>Sign Up</button>
          </form>
        
        </div>
        
        <div className='googleLoginSection'>
          <p>Sign in with google to Continue</p>
          <button className='google-login' onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </div>
      </div>
    
  )
}

export default Register;