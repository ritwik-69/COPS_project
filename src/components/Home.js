import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse  } from "@fortawesome/free-solid-svg-icons";



export default function Home() {
  return (
    <div>
        <>
  {/* Navigation*/}
  <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    id="mainNav"
  >
    <div className="container px-4">
      <h1 className="navbar-brand" >
      <FontAwesomeIcon icon={faHouse} />{' '}
        MY-APP 
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
            <Link to='/auth' className="nav-link" >
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
      <h1 className="fw-bolder">Welcome to My-app</h1>
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
          <h2>About this page</h2>
          <p className="lead">
            This is a great place to talk about your webpage. This template is
            purposefully unstyled so you can use it as a boilerplate or starting
            point for you own landing page designs! This template features:
          </p>
          <ul>
            <li>Clickable nav links that smooth scroll to page sections</li>
            <li>
              Responsive behavior when clicking nav links perfect for a one page
              website
            </li>
            <li>
              Bootstrap's scrollspy feature which highlights which section of
              the page you're on in the navbar
            </li>
            <li>
              Minimal custom CSS so you are free to explore your own unique
              design options
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
        Copyright © Your Website 2023
      </p>
    </div>
  </footer>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</>

      
    </div>
  )
}
