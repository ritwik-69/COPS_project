import React from 'react'
import Playertab from './Playertab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDiamond, faWarehouse, faHeadSideVirus, faChartSimple, faBars, faListCheck, faToolbox, faTableTennisPaddleBall,faFaceAngry,faDumbbell,faHandFist, faPersonRunning,faMobile,faBrain, faTv, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Skills(props) {
    return (
        <div>
            <Playertab level={props.level} width={props.width} credits={props.credits} skillpoints={props.skillpoints}/>
            <div class="card ">
                <div className='card-body'>
                    <div class="card w-50 offset-3 text-center" style={{ backgroundColor: '#ffffff', }}>
                        <h1><FontAwesomeIcon icon={faHeadSideVirus} />{' '}Skills</h1>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-center"> <FontAwesomeIcon icon={faBrain} />{' '}Intelligence</h5>
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
                                    <a class="btn btn-outline-dark btn-sm mt-1" onClick={() => {props.addbutton();props.refresh();}}>+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-center"> <FontAwesomeIcon icon={faPersonRunning} />{' '}Agility</h5>
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
                                    <a href="#" class="btn btn-outline-dark btn-sm mt-1">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-center"> <FontAwesomeIcon icon={faDumbbell} />{' '}Strength</h5>
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
                                    <a href="#" class="btn btn-outline-dark btn-sm mt-1">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-center"><FontAwesomeIcon icon={faHandFist} />{' '}Discipline</h5>
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
                                    <a href="#" class="btn btn-outline-dark btn-sm mt-1">+</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-center"><FontAwesomeIcon icon={faFaceAngry} />{' '}Emotion</h5>
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
                                    <a href="#" class="btn btn-outline-dark btn-sm mt-1">+</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}
