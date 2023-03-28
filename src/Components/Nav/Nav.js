import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    
  }, []);

  console.log("Show",show)

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo'
        src=""
        alt="Movieflix Logo"
        />

        <img className='nav__avatar'
        src=""
        alt="MovieFlix avatar"
        />

    </div>
  )
}

export default Nav