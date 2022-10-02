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
        src="netflixlogo.png"
        alt="Netflix Log"
        />

        <img className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix logo"
        />

    </div>
  )
}

export default Nav