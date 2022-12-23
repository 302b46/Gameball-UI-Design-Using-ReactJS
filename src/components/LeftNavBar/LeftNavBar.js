import React from 'react';
import './LeftNavBar.css';

const LeftNavBar = () => {
  return (
    <div className="left-navbar">
       <div className="dashboard">
        <img src="https://img.icons8.com/clouds/512/speed.png"></img>
        <p>Dashboard</p>
       </div>

       <div className="game-plan">
       <img src="https://img.icons8.com/office/512/waypoint-map.png"></img>
       <p>Game Plan</p>
       </div>

       <div className="levels">
       <img src="https://img.icons8.com/ios-filled/512/rocket.png"></img>
       <p>Levels</p>
       </div>

    </div>
  )
}

export default LeftNavBar