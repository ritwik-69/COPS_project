import React,{useState} from 'react'
import Playertab from './Playertab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDiamond, faWarehouse, faHeadSideVirus, faChartSimple, faBars, faListCheck, faToolbox, faTableTennisPaddleBall,faFaceAngry,faDumbbell,faHandFist, faPersonRunning,faMobile,faBrain, faTv, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import { getAuth,createUserWithEmailAndPassword, signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
export default function Skills(props) {

  const [displayname,setDisplayname]=useState(props.user)
 
  
  const [level,setlevel]=useState(props.level);
  const [xp,setXp]=useState(props.xp);
  const [credits,setCredits]=useState(props.credits);
  const [skillpoints,setskillpoints]=useState(props.skillpoints);
  const [IntelligenceLvl,setIlvl]=useState(props.skillIlvl);
  const [Ixp,setIXp]=useState(props.Ixp);
  const [Squantity,setSquantity]=useState(props.Squantity);
  const [Vquantity,setVquantity]=useState(props.Vquantity);
  const [Wquantity,setWquantity]=useState(props.Wquantity);
  const [AgilityLvl,setAlvl]=useState(props.skillAlvl);
  const [Axp,setAXp]=useState(props.Axp);
  const [DisciplineLvl,setDlvl]=useState(props.skillDlvl);
  const [Dxp,setDXp]=useState(props.Dxp);
  const [EmotionsLvl,setElvl]=useState(props.skillElvl);
  const [Exp,setEXp]=useState(props.Exp);
  const [StrengthLvl,setSlvl]=useState(props.skillSlvl);
  const [Sxp,setSXp]=useState(props.Sxp);
  const width = (xp / 400) * 100 + '%';
  const Iwidth =(Ixp / 400) * 100 + '%';
  const Awidth =(Axp / 400) * 100 + '%';
  const Swidth =(Sxp / 400) * 100 + '%';
  const Dwidth =(Dxp / 400) * 100 + '%';
  const Ewidth =(Exp / 400) * 100 + '%';

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
  }
  function updateAcounters(){
    if (Axp > 400) {
        setAlvl(AgilityLvl+Math.floor(Axp/400));// if xp is 1000, two levels up
        setAXp(Axp%400);// what is left when increasing levels
     }
  
     
    }
  function giveAExp(number){
    setskillpoints(skillpoints-25);
    setAXp(Axp+50);
    updateAcounters();
  
  
    ;//update
  }
  function updateEcounters(){
    if (Exp > 400) {
        setElvl(EmotionsLvl+Math.floor(Exp/400));// if xp is 1000, two levels up
        setEXp(Exp%400);// what is left when increasing levels
     }
  
     
    }
  function giveEExp(number){
    setskillpoints(skillpoints-25);
    setEXp(Exp+50);
    updateEcounters();
  
  
    ;//update
  }
  function updateDcounters(){
    if (Dxp > 400) {
        setDlvl(DisciplineLvl+Math.floor(Dxp/400));// if xp is 1000, two levels up
        setDXp(Dxp%400);// what is left when increasing levels
     }
  
     
    }
  function giveDExp(number){
    setskillpoints(skillpoints-25);
    setDXp(Dxp+50);
    updateDcounters();
  
  
    ;//update
  }
  function updateScounters(){
    if (Sxp > 400) {
        setSlvl(StrengthLvl+Math.floor(Sxp/400));// if xp is 1000, two levels up
        setSXp(Sxp%400);// what is left when increasing levels
     }
  
     
    }
  function giveSExp(number){
    setskillpoints(skillpoints-25);
    setSXp(Sxp+50);
    updateScounters();
  
  
    ;//update
  }


    return (
        <div>
            <Playertab user={displayname} level={level} width={width} credits={credits} skillpoints={skillpoints}/>
            <div className="card ">
                <div className='card-body'>
                    <div className="card w-50 offset-3 text-center" style={{ backgroundColor: '#ffffff', }}>
                        <h1><FontAwesomeIcon icon={faHeadSideVirus} />{' '}Skills</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center"> <FontAwesomeIcon icon={faBrain} />{' '}Intelligence</h5>
                                    <div className="or-container mt-1"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                    <h6 className='mt-3' >Level {IntelligenceLvl}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: Iwidth }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {skillpoints>0 ? <a className="btn btn-outline-dark btn-sm mt-1" onClick={()=>{giveIExp();props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity)}}>+</a> :<Popup trigger={<a className="btn btn-outline-dark btn-sm mt-1" >+</a>} position="right center">
    <div>You do not have enough Skillpoints to level up</div>
  </Popup> }
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center"> <FontAwesomeIcon icon={faPersonRunning} />{' '}Agility</h5>
                                    <div className="or-container mt-1"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                    <h6 className='mt-3' >Level {AgilityLvl}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: Awidth }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {skillpoints>0 ? <a className="btn btn-outline-dark btn-sm mt-1" onClick={()=>{giveAExp();props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity)}}>+</a> :<Popup trigger={<a className="btn btn-outline-dark btn-sm mt-1" >+</a>} position="right center">
    <div>You do not have enough Skillpoints to level up</div>
  </Popup> }
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center"> <FontAwesomeIcon icon={faDumbbell} />{' '}Strength</h5>
                                    <div className="or-container mt-1"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                    <h6 className='mt-3' >Level {StrengthLvl}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: Swidth }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {skillpoints>0 ? <a className="btn btn-outline-dark btn-sm mt-1" onClick={()=>{giveSExp();props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity)}}>+</a> :<Popup trigger={<a className="btn btn-outline-dark btn-sm mt-1" >+</a>} position="right center">
    <div>You do not have enough Skillpoints to level up</div>
  </Popup> }
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center"><FontAwesomeIcon icon={faHandFist} />{' '}Discipline</h5>
                                    <div className="or-container mt-1"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                    <h6 className='mt-3' >Level {DisciplineLvl}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: Dwidth }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {skillpoints>0 ? <a className="btn btn-outline-dark btn-sm mt-1" onClick={()=>{giveDExp();props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity)}}>+</a> :<Popup trigger={<a className="btn btn-outline-dark btn-sm mt-1" >+</a>} position="right center">
    <div>You do not have enough Skillpoints to level up</div>
  </Popup> }
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center"><FontAwesomeIcon icon={faFaceAngry} />{' '}Emotion</h5>
                                    <div className="or-container mt-1"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                    <h6 className='mt-3' >Level {EmotionsLvl}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: Ewidth }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {skillpoints>0 ? <a className="btn btn-outline-dark btn-sm mt-1" onClick={()=>{giveEExp();props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity)}}>+</a> :<Popup trigger={<a className="btn btn-outline-dark btn-sm mt-1" >+</a>} position="right center">
    <div>You do not have enough Skillpoints to level up</div>
  </Popup> }
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}
