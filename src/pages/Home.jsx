import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/pcimg.jpg";
import { FaReact } from "react-icons/fa";
import { Wrapper } from "../assets/styles/home";

const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="content">
          <h1 className="home-title">Tatsuma Sato</h1>

          <p className="home-text">
            I am a{" "}
            <span className="text-reactBlue">
              <FaReact
                style={{ display: "inline-block" }}
                className="react-icon"
              />
              React&nbsp;
            </span>
            Developer
          </p>

          <div className="button-container">
            <a
              href="https://drive.google.com/file/d/1j5o9Fcf67_zSuJxmqm9fJgaQg265kEc-/view?usp=sharing"
              className="button"
            >
              Download Resume
            </a>
            <Link to="/about" className="button">
              About Me
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
