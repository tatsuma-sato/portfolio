import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="text-center text-white bg-darkGray">
      <div className="container mx-auto w-full py-3 md:py-5 text-center">
        <div className="flex w-full justify-center">
          <Link
            to="https://www.facebook.com/tatsuma.sato.98"
            className="mx-5 text-xl md:text-2xl hover:text-reactBlue trainsition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://github.com/tatsuma-sato"
            className="mx-5 text-xl md:text-2xl hover:text-reactBlue trainsition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/tatsuma-sato/"
            className="mx-5 text-xl md:text-2xl hover:text-reactBlue trainsition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="text-center px-2 pb-4 md:p-4">&copy; Tatsuma Sato {year} &nbsp;</div>
    </footer>
  );
};

export default Footer;
