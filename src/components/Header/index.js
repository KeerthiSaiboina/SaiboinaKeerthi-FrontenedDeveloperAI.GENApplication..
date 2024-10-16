import React from "react";

import "./index.css";

const Header = () => {
  return (
    <>
      <nav className="header-container-desktop-view">
        <div className="left-items">
         
          <h1 className="nav-heading">EthAi</h1>
          <ul className="nav-items-conatiner">
            <li className="list-item">Features</li>
            <li className="list-item">Roadmap</li>
            <li className="list-item">Tokenomics</li>
            <li className="list-item">Why Us</li>

          </ul>
        </div>
        <div className="right-items">
          <button className="btn-1">Login</button>
          <button className="btn-2">Whitepaper</button>
        </div>
      </nav>

      <nav className="header-container-moblie-view">
        <div className="left-items">
          <h1 className="nav-heading">EthAi</h1>
        </div>
        <div className="right-items">
          <button className="btn">
            <ul className="nav-items-conatiner">
              <li className="list-item">Features</li>
              <li className="list-item">Roadmap</li>
              <li className="list-item">Tokenomics</li>
            </ul>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
