import React from "react";
import image from "../images/my_image.png";
import avatar from "../images/avatar.png";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { Wrapper } from "../assets/styles/about";
import firebaseIcon from "../images/firebase-icon.svg";
import mongoDBIcon from "../images/mongodb-icon.svg";
import htmlIcon from "../images/html-1.svg";
import cssIcon from "../images/css-3.svg";
import reactIcon from "../images/react-2.svg";

const About = () => {
  return (
    <Wrapper className="">
      <h1 className="section-title">About Me</h1>
      <main className="content">
        <div className="about-left basis-1/2">
          <div className="">
            <div className="about-left-content">
              <p>
                Hello! I am Tatsuma Sato, a highly motivated{" "}
                <span>
                  <FaReact style={{ display: "inline" }} />
                  React &nbsp;
                </span>
                deployer.
                <br />
                <br />
                Growing up, I was given a computer by my father, and ever since
                then, computers and the internet have always been around me. It
                has been less than 20 years since then, but the IT industry has
                come a long way <br />
                <br />
                In the process, when I was in junior high school, I created my
                own profile page on a website creation service. I didn't have
                any knowledge at that time, but I learned html tags without
                knowing it. In college, I discovered C++, and for the first
                time, I did "programming". I still remember how impressed I was
                when I first wrote and executed a program to display "Hello,
                world" using C++, and how I was so absorbed in writing code that
                I spent several hours facing my PC. <br />
                <br />
                After graduating from college, I went on to become a teacher.
                Although I found teaching and watching my students grow and
                develop to be both fun and rewarding, I wanted to learn new
                things and grow and be a part of the fast-paced IT industry, so
                I decided to move to Canada and try a new thing.
                <br />
                <br /> Through my studies at the College, I have developed a
                thorough understanding of front-end fundamentals, and is
                particularly adept at understanding React. This portfolio is
                also by React.
                <br />
                <br />
                With the motto "learning never ends," I will continue to learn
                more to become a professional web developer and to help others
                who need my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-right-image">
            {/* <img className="rounded-full h-full w-full" src={image} alt="" /> */}
            <img src={image} alt="" />
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <div className="image-container">
              <img src={htmlIcon} alt="" className="skill-icon" />
              <img src={cssIcon} alt="" className="skill-icon" />
              <img src={reactIcon} alt="" className="skill-icon" />
              <img src={firebaseIcon} alt="" className="skill-icon" />
              <img src={mongoDBIcon} alt="" className="skill-icon" />
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default About;
