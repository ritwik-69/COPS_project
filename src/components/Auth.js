
import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function (props) {

    return (
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