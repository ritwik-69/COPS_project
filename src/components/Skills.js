import React from 'react'
import Playertab from './Playertab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDiamond, faWarehouse, faHeadSideVirus, faChartSimple, faBars, faListCheck, faToolbox, faTableTennisPaddleBall,faFaceAngry,faDumbbell,faHandFist, faPersonRunning,faMobile,faBrain, faTv, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
export default function Skills(props ) {
    return (
        <div>
            <Playertab user={props.user} level={props.level} width={props.width} credits={props.credits} skillpoints={props.skillpoints}/>
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
                                    <h6 className='mt-3' >Level {props.skillIlvl}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: props.Iwidth }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    {props.skillpoints>0 ? <a className="btn btn-outline-dark btn-sm mt-1" onClick={() => {props.addIbutton();}}>+</a> :<Popup trigger={<a className="btn btn-outline-dark btn-sm mt-1" >+</a>} position="right center">
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
                                    <h6 className='mt-3' >Level {props.level}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: props.width }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <a href="#" className="btn btn-outline-dark btn-sm mt-1">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center"> <FontAwesomeIcon icon={faDumbbell} />{' '}Strength</h5>
                                    <div className="or-container mt-1"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                    <h6 className='mt-3' >Level {props.level}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: props.width }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <a href="#" className="btn btn-outline-dark btn-sm mt-1">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center"><FontAwesomeIcon icon={faHandFist} />{' '}Discipline</h5>
                                    <div className="or-container mt-1"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                    <h6 className='mt-3' >Level {props.level}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: props.width }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <a href="#" className="btn btn-outline-dark btn-sm mt-1">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title text-center"><FontAwesomeIcon icon={faFaceAngry} />{' '}Emotion</h5>
                                    <div className="or-container mt-1"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                    <h6 className='mt-3' >Level {props.level}</h6>
                                    <div className="progress mb-1" style={{ height: 10 }}>
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: props.width }}
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                    <a href="#" className="btn btn-outline-dark btn-sm mt-1">+</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}
