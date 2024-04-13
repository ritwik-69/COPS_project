
import React, { useState } from "react"
import { Link,Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { app } from '../firebase';
import { GoogleAuthProvider } from "firebase/auth";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export default function (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState(<div></div>)
  const [signedin,setSignin]=useState(false);

  const signinUser = () => {
    signInWithEmailAndPassword(auth,email,password).then((usercred)=>setSignin(true)).catch((err) => setError( <p class="text-center text-danger">Incorrect email/password</p>))

  }
  const signupwithgoogle = () =>{
    signInWithPopup(auth,provider).then((result)=>{setSignin(true)});
  }

  


  return (
    <>
    {signedin && (<Navigate to={'/main'} replace={true}/> )}
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link className="link-primary" to="/signup">
              Sign Up
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=> setEmail(e.target.value)}
                value={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=> setPassword(e.target.value)}
                value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={signinUser}>
              
                Submit
              

            </button>
            {error}
          </div>
          <p className="text-center mt-2">


            <div className="or-container"><div className="line-separator"></div> <div className="or-label">or</div><div className="line-separator"></div></div>


            <div className="row">
              <div className="col-md-12">
                <a className="btn btn-google btn-block btn-outline" href="#" onClick={signupwithgoogle}><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Sign in using google</a>

              </div>
            </div>
          </p>
        </div>
      </form>
    </div>
    </>
  )



}