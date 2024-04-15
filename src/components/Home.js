import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faArrowUp  } from "@fortawesome/free-solid-svg-icons";
import { getDatabase,set,ref } from 'firebase/database';
import { app } from '../firebase';
const db=getDatabase(app);



export default function Home() {

  const putData = () => {
    set(ref(db , 'user/ritwik'),{
      id:1,
      name:'ritwik',
      age:20
    })
  }
  return (
    <div>
        <>
  {/* Navigation*/}
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    id="mainNav"
  >
    <div className="container px-0 ">
      <h1 className="navbar-brand" >
      <FontAwesomeIcon icon={faHouse} />{' '}
        Level-Up
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item" >
            <Link to='/signup' className="nav-link" >
              Sign up
            </Link>
          </li>
          <li className="nav-item">
          <Link to='/auth' className="nav-link" >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Header*/}
  <header className="bg-primary bg-gradient text-white">
    <div className="container py-5 px-4 text-center" style={{ width: 500, height: 400 }}>
      <h1 className="fw-bolder">Welcome to Level-Up{' '}<FontAwesomeIcon icon={faArrowUp} /></h1>
      <p className="lead">
      Boost your efficiency with our intuitive productivity website, designed to streamline your tasks and maximize your time.
      </p>
      <Link className="btn btn-lg btn-light" to="/auth">
        Get started!!
      </Link>
    </div>
  </header>
  {/* About section*/}
  <section id="about">
    <div className="container px-4">
      <div className="row gx-4 justify-content-center">
        <div className="col-lg-8">
          <h2>About this Website</h2>
          <p className="lead">
            This is a Great Website to Manage and Track your Tasks in a fun and Exciting way and achieve ultimate productivity.In this website you can:
          </p>
          <ul>
            <li>Add your current tasks to do and on completing task gain experience to <strong>Level Up</strong> </li>
            <li>
             Gain credits to spent on shop where you can buy fun activities and add it to your inventory
            </li>
            <li>
              Gain skill points and assign it to specific skills you think u gained from doing a task and <strong>Level Up</strong> your individual skills.
            </li>
            <li>
              Use this to fix your life by keeping a track of your day to day activities by gamifying your life
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* Footer*/}
  <footer className="py-5 bg-dark">
    <div className="container px-4">
      <p className="m-0 text-center text-white">
        Copyright © Level-Up 2024
      </p>
    </div>
  </footer>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</>

      
    </div>
  )
}
