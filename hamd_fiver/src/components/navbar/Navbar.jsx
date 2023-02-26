import React from 'react'
import "./Navbar.scss"
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">Hamd</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Hamd Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a seller</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
