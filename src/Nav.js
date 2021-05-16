import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo" 
      />
      <img
        className="nav__avatar"
        src="https://lh3.googleusercontent.com/proxy/3zVyVRelPvWbBm9DC-Nvtl_wMNDsY0rsR0rWA0g04HVH555PJKg15uv1xWdc9_GTn6LVuT95alUAnNMt--KHauf_x7qsqAmheMOfbUnw8qoTtjPR1BrMOg"
        alt="Netflix Logo" 
      />
    </div>
  )
}

export default Nav;
