import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../assets/styles/navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <div className="container">
        <Link to="/" className="logo">
          <span>Tatsuma Sato</span>
        </Link>
        <button type="button" className="mobile-menu" onClick={handleMenu}>
          {!isOpen ? (
            <svg
              className="menu-icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        <div
          className={`mobile-menu-body ${isOpen ? "open" : null}`}
          id="mobile-menu"
        >
          <ul className="menu-items">
            <li>
              <Link to={"/"} className="menu-item" onClick={handleClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu-item" onClick={handleClose}>
                About
              </Link>
            </li>
            <li>
              <Link to="/works" className="menu-item" onClick={handleClose}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-item" onClick={handleClose}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
