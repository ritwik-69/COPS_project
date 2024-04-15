import React ,{useState,useEffect} from 'react';
import './main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad,faDiamond,faWarehouse,faHeadSideVirus,faChartSimple,faBars,faListCheck  } from "@fortawesome/free-solid-svg-icons";
import Playertab from './Playertab';
import App from './App';
import playerpic from './img_pfp.jpg'
import { Link } from 'react-router-dom';
import { getAuth,createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import {app} from '../firebase'
import Reward from './reward';
import Stats from './Stats';
import Inventory from './Inventory';
import Skills from './Skills';





export default function Main(props) {
  const auth =getAuth(app);
const user=(auth.currentUser ? auth.currentUser : {displayName:"New Player"});
  const [displayname,setDisplayname]=useState(user.displayName)
 
  
  const [level,setlevel]=useState(1);
  const [xp,setXp]=useState(0);
  const [credits,setCredits]=useState(0);
  const [skillpoints,setskillpoints]=useState(0);
  const [IntelligenceLvl,setIlvl]=useState(1);
  const [Ixp,setIXp]=useState(0);
  const [Squantity,setSquantity]=useState(0);
  const [Vquantity,setVquantity]=useState(0);
  const [Wquantity,setWquantity]=useState(0);
  const [AgilityLvl,setAlvl]=useState(1);
  const [Axp,setAXp]=useState(0);
  const [DisciplineLvl,setDlvl]=useState(1);
  const [Dxp,setDXp]=useState(0);
  const [EmotionsLvl,setElvl]=useState(1);
  const [Exp,setEXp]=useState(0);
  const [StrengthLvl,setSlvl]=useState(1);
  const [Sxp,setSXp]=useState(0);
  const width = (xp / 400) * 100 + '%';
  const Iwidth =(Ixp / 400) * 100 + '%';
  const Awidth =(Axp / 400) * 100 + '%';
  const Swidth =(Sxp / 400) * 100 + '%';
  const Dwidth =(Dxp / 400) * 100 + '%';
  const Ewidth =(Exp / 400) * 100 + '%';

    

  function updatecounters(){
    if (xp > 400) {
        setlevel(level+Math.floor(xp/400));// if xp is 1000, two levels up
        setXp(xp%400);// what is left when increasing levels
     }
    
    }
    function giveExp(number){
      setCredits(credits+100);
      setXp(xp+50);
      setskillpoints(skillpoints+25)
      updatecounters();//update
  }
  
    
  function buy(){
    setCredits(credits-100);
  }

  function addS(){
    setSquantity(Squantity+1)
  }
  function addW(){
    setWquantity(Wquantity+1)
  }
  function addV(){
    setVquantity(Vquantity+1)
  }

  function UseS(){
    setSquantity(Squantity-1)
  }
  function UseV(){
    setVquantity(Vquantity-1)
  }
  function UseW(){
    setWquantity(Wquantity-1)
  }
  
  
  const [content, setContent] = useState(<><Playertab user={displayname}level={level} width={width} credits={credits} skillpoints={skillpoints}/>
  <App func={giveExp}/>
  </>);

function getout(){
  signOut(auth).then();
}

  function handleRewardsClick() {
    setContent(<Reward user={displayname} level={level} width={width} credits={credits} skillpoints={skillpoints} buy={buy} adds={addS} addv={addV} addw={addW}/>);
  }
  function handleInventoryClick() {
    setContent(<Inventory user={displayname} level={level} width={width} credits={credits} skillpoints={skillpoints} Squantity={Squantity} Wquantity={Wquantity} Vquantity={Vquantity} UseS={UseS} UseV={UseV} UseW={UseW}/>);
  }
  function handleSkillsClick() {
    setContent(<Skills user={displayname} level={level} width={width} credits={credits} skillpoints={skillpoints} skillIlvl={IntelligenceLvl} Ixp={Ixp} addIbutton={giveIExp} Iwidth={Iwidth} skillAlvl={AgilityLvl} Axp={Axp} addAbutton={giveAExp} Awidth={Awidth} skillDlvl={DisciplineLvl} Dxp={Ixp} addDbutton={giveSExp} Dwidth={Iwidth} skillSlvl={StrengthLvl} Sxp={Sxp} addSbutton={giveSExp} Swidth={Swidth} skillElvl={EmotionsLvl} Exp={Ixp} addEbutton={giveEExp} Ewidth={Ewidth} />);
  }
  function handleDashboardClick() {
    setContent(<><Playertab user={displayname} level={level} width={width} credits={credits} skillpoints={skillpoints}/>
               <App func={giveExp}/>
               </>);
  }

  function updateIcounters(){
    if (Ixp > 400) {
        setIlvl(IntelligenceLvl+Math.floor(Ixp/400));// if xp is 1000, two levels up
        setIXp(Ixp%400);// what is left when increasing levels
     }

     
    }
  function giveIExp(number){
    setskillpoints(skillpoints-25);
    setIXp(Ixp+50);
    updateIcounters();


    ;//update
}
function updateAcounters(){
  if (Axp > 400) {
      setAlvl(AgilityLvl+Math.floor(Axp/400));// if xp is 1000, two levels up
      setAXp(Axp%400);// what is left when increasing levels
   }

   
  }
function giveAExp(number){
  setskillpoints(skillpoints-25);
  setAXp(Ixp+50);
  updateAcounters();


  ;//update
}
function updateEcounters(){
  if (Exp > 400) {
      setIlvl(EmotionsLvl+Math.floor(Exp/400));// if xp is 1000, two levels up
      setIXp(Exp%400);// what is left when increasing levels
   }

   
  }
function giveEExp(number){
  setskillpoints(skillpoints-25);
  setEXp(Ixp+50);
  updateEcounters();


  ;//update
}
function updateDcounters(){
  if (Dxp > 400) {
      setIlvl(DisciplineLvl+Math.floor(Dxp/400));// if xp is 1000, two levels up
      setIXp(Dxp%400);// what is left when increasing levels
   }

   
  }
function giveDExp(number){
  setskillpoints(skillpoints-25);
  setDXp(Ixp+50);
  updateDcounters();


  ;//update
}
function updateScounters(){
  if (Sxp > 400) {
      setIlvl(StrengthLvl+Math.floor(Sxp/400));// if xp is 1000, two levels up
      setIXp(Sxp%400);// what is left when increasing levels
   }

   
  }
function giveSExp(number){
  setskillpoints(skillpoints-25);
  setSXp(Ixp+50);
  updateScounters();


  ;//update
}
  
  return (
    <>
  {/* Hello world */}
  {/* <button onClick={giveExp}>give xp</button> */}
  <div className="container-fluid  " >
    <div className="row flex-nowrap " >
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark " >
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 position-fixed">
          <a
            href="#"
            className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            onClick={handleDashboardClick}
          >
            <FontAwesomeIcon icon={faBars} />
            <span className="ms-3 d-none d-sm-inline" onClick={giveExp}> Menu</span>
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
                <span className="ms-1 d-none d-sm-inline">Shop</span>
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
          </ul>
          <hr />
          <div className="dropdown pb-4 ">
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
              <span className="d-none d-sm-inline mx-1">{displayname}</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <Link className="dropdown-item" to='/' onClick={getout()}>
                  Sign out
                </Link>
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
