import React from 'react';
import './Header.css';


const header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img className="logo" src="https://blog.gameball.co/wp-content/uploads/2020/04/gameball-logo-blog@2x.png"></img>
      </div>
      <div className="header__center">
        <p>Game Plan</p>
      </div>
      <div className="header__right">
        <img className="profile" src="https://img.icons8.com/ios/512/user-group-man-man.png"></img>
        <p className="upper">Account Switcher</p>
        <p className="lower">Category 99</p>
        <img className="arrow" src="https://img.icons8.com/ios-glyphs/512/expand-arrow--v2.png"></img>
      </div>

    </div>


  );
}

export default header