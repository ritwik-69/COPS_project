import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
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
