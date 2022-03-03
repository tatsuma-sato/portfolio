import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="text-center text-white bg-darkGray">
      <div className="container mx-auto w-full py-5 text-center">
        <div className="flex w-full justify-center">
          <Link
            to=""
            className="mx-5 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
          <Link
            to=""
            className="mx-5 text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            to=""
            className="mx-5 text-2xl"
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
