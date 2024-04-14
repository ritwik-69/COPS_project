import React from 'react'
import Playertab from './Playertab'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDiamond, faWarehouse, faHeadSideVirus, faChartSimple, faBars, faListCheck,faToolbox, faTableTennisPaddleBall,faMobile, faTv, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Inventory(props) {
    return (
        <div>
            <Playertab level={props.level} width={props.width} credits={props.credits} skillpoints={props.skillpoints}/>
            <div class="card ">
                <div className='card-body'>
                <div class="card w-50 offset-3 text-center" style={{backgroundColor: '#ffffff', }}>
                    <h1><FontAwesomeIcon icon={faWarehouse} />{' '}Inventory</h1>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Play Sports <FontAwesomeIcon icon={faTableTennisPaddleBall} /></h5>
                                <div className="or-container"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                <p class="card-text "> <h6> Play a sport of your interest for 1 hour whenever you wish to</h6> </p>
                                <p class="card-text "> <h6>Quantity: 0  </h6> </p>
                                <Popup trigger={<button className='btn btn-primary'> Use item</button>} position="right center">
    <div>You do not have have this item,Please buy it from shop</div>
  </Popup>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Play Videogames <FontAwesomeIcon icon={faGamepad} /></h5>
                                <div className="or-container"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                <p class="card-text "> <h6> Play a Videogames of your interest for 1 hour whenever you wish to</h6> </p>
                                <p class="card-text "> <h6>Quantity: 0  </h6> </p>
                                <Popup trigger={<button className='btn btn-primary'>Use item</button>} position="right center">
    <div>You do not have have this item,Please buy it from shop</div>
  </Popup>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Watch Web series/Anime <FontAwesomeIcon icon={faTv} /></h5>
                                <div className="or-container"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                <p class="card-text "> <h6>watch Web series or anime of your choice for 1 hour whenever you wish to</h6> </p>
                                <p class="card-text "> <h6>Quantity: 0 </h6> </p>
                                <Popup trigger={<button className='btn btn-primary'> Use item</button>} position="right center">
    <div>You do not have have this item,Please buy it from shop</div>
  </Popup>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            </div>
            )
}
