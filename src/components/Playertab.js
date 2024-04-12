import React from 'react';
import './main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck  } from "@fortawesome/free-solid-svg-icons";
import profilePic from './img_pfp.jpg';


export default function Playertab() {
  return (
      <>
    <div className="container">
    <div className="main-body">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src={profilePic}
                  alt="Admin"
                  className="rounded-circle p-1 bg-primary"
                  width={95}
                />
                <div className="mt-3">
                  <h4>Ritvik Gupta</h4>
                  <p className="text-secondary mb-1">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">User</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Ritvik Gupta"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-3">
                  <h6 className="mb-0">Title/Class</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Shadow Monarch"
                  />
                </div>
              </div>
            </div>
          
          <div className="row">
            <div className="col-sm-12">
              {/* <div className="card"> */}
                <div className="card-body">
                  {/* <h5 className="d-flex align-items-center mb-3">
                    Project Status
                  </h5> */}
                  <h6>Level 69</h6>
                  <div className="progress mb-3" style={{ height: 10 }}>
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  
                  
                  
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div className='container'>

  </div>
  </>
    
  )
}
