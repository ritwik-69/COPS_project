import React, { useEffect } from 'react';
import { Link,Navigate } from 'react-router-dom';
import { getAuth,createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged } from "firebase/auth";
import {app} from '../firebase'
import { useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";

const auth =getAuth(app);
const provider = new GoogleAuthProvider();

export default function Signup() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState()
  const [signedin,setSignin]=useState(false);

  const signupUser = () =>{
    createUserWithEmailAndPassword(auth,email,password).then((usercred)=>{usercred.user.displayName={name}});
    setSignin(true);
  }
  const signupwithgoogle = () =>{
    signInWithPopup(auth,provider).then((result) =>setSignin(true))
  }

    return (
      <>
      {signedin && (<Navigate to={'/main'} replace={true}/> )}

        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign up</h3>
              <div className="text-center">
                Already registered?{" "}
                <Link className="link-primary" to="/auth">
                  Sign In
                </Link>
              </div>
              <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                  type="name"
                  className="form-control mt-1"
                  placeholder="Enter Full name"
                  onChange={(e)=> setName(e.target.value)}
                value={name}
                />


              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  onChange={(e)=> setEmail(e.target.value)}
                value={email}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Password"
                  onChange={(e)=> setPassword(e.target.value)}
                value={password}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={signupUser}>
                
                    Submit
                    
                </button>
              </div>
              <p className="text-center mt-2">
              
                <div className="or-container"><div className="line-separator"></div> <div className="or-label">or</div><div className="line-separator"></div></div>
    
    
                                <div className="row">
                                    <div className="col-md-12">
                                      <a className="btn  btn-google btn-block btn-outline" href="#" onClick={signupwithgoogle}><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Sign up using google</a>
    
                                    </div>
                                </div>
              </p>
              
            </div>
          </form>
        </div>
        </>
      )
}
