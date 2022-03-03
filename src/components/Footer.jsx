import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="text-center text-white bg-darkGray">
      <div className="container py-5">
        <div className="flex w-28 justify-between">
          <Link
            to=""
            className="mr-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            to=""
            className="mr-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            to=""
            className="mr-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <div className="text-center p-4">&copy; copyright {year} &nbsp;</div>
    </footer>
  );
};

export default Footer;
