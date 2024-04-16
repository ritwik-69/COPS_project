import React , {useState}from 'react'
import Playertab from './Playertab'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDiamond, faWarehouse, faHeadSideVirus, faChartSimple, faBars, faListCheck,faToolbox, faTableTennisPaddleBall,faMobile, faTv, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Inventory(props) {
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
  const [width,setwidth]=useState(props.width);
  

    function UseS(){
        setSquantity(Squantity-1)
      }
      function UseV(){
        setVquantity(Vquantity-1)
      }
      function UseW(){
        setWquantity(Wquantity-1)
      }
      
    return (
        <div>
            <Playertab xp={xp} user={displayname} level={level} width={width} credits={credits} skillpoints={skillpoints}/>
            <div className="card ">
                <div className='card-body'>
                <div className="card w-50 offset-3 text-center" style={{backgroundColor: '#ffffff', }}>
                    <h1><FontAwesomeIcon icon={faWarehouse} />{' '}Inventory</h1>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Play Sports <FontAwesomeIcon icon={faTableTennisPaddleBall} /></h5>
                                <div className="or-container"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                <p className="card-text "> <h6> Play a sport of your interest for 1 hour whenever you wish to</h6> </p>
                                <p className="card-text "> <h6>Quantity: {Squantity}  </h6> </p>
                                {Squantity ? <button className='btn btn-primary' onClick={()=>{UseS();props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity,width)}}>Use item</button> :  <Popup trigger={<button className='btn btn-primary'> Use item</button>} position="right center">
    <div>You do not have have this item,Please buy it from shop</div>
  </Popup>}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Play Videogames <FontAwesomeIcon icon={faGamepad} /></h5>
                                <div className="or-container"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                <p className="card-text "> <h6> Play a Videogames of your interest for 1 hour whenever you wish to</h6> </p>
                                <p className="card-text "> <h6>Quantity: {Vquantity}  </h6> </p>
                                {Vquantity ? <button className='btn btn-primary' onClick={()=>{UseV();props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity,width)}}>Use item</button> :  <Popup trigger={<button className='btn btn-primary'> Use item</button>} position="right center">
    <div>You do not have have this item,Please buy it from shop</div>
  </Popup>}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Watch Web series/Anime <FontAwesomeIcon icon={faTv} /></h5>
                                <div className="or-container"><div className="line-separator"></div> <div className="line-separator"></div></div>
                                <p className="card-text "> <h6>watch Web series or anime of your choice for 1 hour whenever you wish to</h6> </p>
                                <p className="card-text "> <h6>Quantity: {Wquantity} </h6> </p>
                                {Wquantity ? <button className='btn btn-primary' onClick={()=>{UseW();props.func(level,displayname,credits,skillpoints,IntelligenceLvl,AgilityLvl,DisciplineLvl,EmotionsLvl,StrengthLvl,Ixp,Axp,Dxp,Exp,Sxp,Squantity,Vquantity,Wquantity,width)}}>Use item</button> :  <Popup trigger={<button className='btn btn-primary'> Use item</button>} position="right center">
    <div>You do not have have this item,Please buy it from shop</div>
  </Popup>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            </div>
            )
}
