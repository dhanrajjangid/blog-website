import React from 'react';
import { auth, provider} from "../firebase-config"
import { signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {

  let navigate = useNavigate();

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
        <span className="title">Log In</span>
          
          <form>
              <input type="email" placeholder='Email...'/>
              <input type="password" placeholder='Password...'/>
              <button>Sign In</button>
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

export default Login