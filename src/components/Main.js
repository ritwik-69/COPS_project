import React ,{useState} from 'react';
import './main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad,faDiamond,faWarehouse,faHeadSideVirus,faChartSimple,faBars,faListCheck  } from "@fortawesome/free-solid-svg-icons";
import Playertab from './Playertab';
import App from './App';
import playerpic from './img_pfp.jpg'

export default function Main() {
  const [content, setContent] = useState(<><Playertab/>
  <App/>
  </>);

  function handleRewardsClick() {
    setContent(<div>This is the rewards content!</div>);
  }
  function handleInventoryClick() {
    setContent(<div>This is the Inventory content!</div>);
  }
  function handleSkillsClick() {
    setContent(<div>This is the skills content!</div>);
  }
  function handleStatisticsClick() {
    setContent(<div>This is the statistics content!</div>);
  }
  function handleDashboardClick() {
    setContent(<><Playertab/>
               <App/>
               </>);
  }

  
  return (
    <>
  {/* Hello world */}
  <div className="container-fluid">
    <div className="row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
          <a
            href="#"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            onClick={handleDashboardClick}
          >
            <FontAwesomeIcon icon={faBars} />
            <span className="ms-3 d-none d-sm-inline"> Menu</span>
          </a>
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li className="nav-item">
            
              <a href="#" className="nav-link align-middle px-0" onClick={handleDashboardClick}>
              <FontAwesomeIcon icon={faGamepad} />{'  '}
                <span className="ms-1 d-none d-sm-inline">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-0 align-middle" onClick={handleRewardsClick}>
              <FontAwesomeIcon icon={faDiamond} />{'   '}
                <span className="ms-1 d-none d-sm-inline">Rewards</span>
              </a>
            </li>
            <li>
              <a
                href="#submenu2"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle "
                onClick={handleInventoryClick}
                
              >
                <FontAwesomeIcon icon={faWarehouse} />{'   '}
                <span className="ms-1 d-none d-sm-inline">Inventory</span>
              </a>
            </li>
            <li>
              <a
                href="#submenu3"
                data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
                onClick={handleSkillsClick}
              >
                <FontAwesomeIcon icon={faHeadSideVirus} />{'   '}
                <span className="ms-1 d-none d-sm-inline">Skills</span>{" "}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-0 align-middle" onClick={handleStatisticsClick}>
              <FontAwesomeIcon icon={faChartSimple} />{'   '}
                <span className="ms-1 d-none d-sm-inline">Statistics</span>{" "}
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown pb-4">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={playerpic}
                alt="hugenerd"
                width={30}
                height={30}
                className="rounded-circle"
              />
              <span className="d-none d-sm-inline mx-1">Ritvik Gupta</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col py-3">{content}</div>
    </div>
  </div>
</>

  )
}
