
import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                <Link to="/main" className="text-light">
                Submit
                </Link>
                
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#" onClick={changeAuthMode}>Password?</a>

              <div className="or-container"><div className="line-separator"></div> <div className="or-label">or</div><div className="line-separator"></div></div>


                            <div className="row">
                                <div className="col-md-12">
                                  <a className="btn btn-google btn-block btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Sign in using google</a>

                                </div>
                            </div>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
            <Link to="/main" className="text-light">
                Submit
                </Link>
            </button>
          </div>
          <p className="text-center mt-2">
          Already have an Account <a href="#" onClick={changeAuthMode}>Login</a>
            <div className="or-container"><div className="line-separator"></div> <div className="or-label">or</div><div className="line-separator"></div></div>


                            <div className="row">
                                <div className="col-md-12">
                                  <a className="btn  btn-google btn-block btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Sign up using google</a>

                                </div>
                            </div>
          </p>
          
        </div>
      </form>
    </div>
  )
}