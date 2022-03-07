import React from "react";
import image from "../images/my_image.png";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-black w-screen text-white h-full py-5">
      <h1 className="lg:text-2xl font-bold md:text-xl">About Me</h1>
      <main className="pt-5 relative px-5 flex xl:flex-row flex-col flex-col-reverse gap-10 my-5 justify-between">
        <div className="about-left basis-1/2">
          <div className="">
            <div className="bg-darkGray rounded-2xl h-3/4">
              <p className="p-5 lg:p-10 text-xs sm:text-sm md:text-base leading-relaxed">
                Hello! I am Tatsuma Sato, a highly motivated{" "}
                <span className="text-reactBlue font-bold">
                  <FaReact className="inline" />
                  React &nbsp;
                </span>
                deployer.
                <br />
                <br />
                Growing up, I was given a computer by my father, and ever since
                then, computers and the internet have always been around me. It
                has been less than 20 years since then, but the IT industry has
                come a long way, and I have used many computers, and as new
                computers became available, even higher specifications were
                developed. There are even smart phones, computers that you can
                carry around with you, so to speak, which was unimaginable when
                I was a child. It is no exaggeration to say that we cannot live
                without the Internet in this day and age. <br />
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

        <div className="about-right flex basis-1/2 justify-center items-center">
          <div className="w-auto h-auto w-96 h-96">
            <img className="rounded-full h-full w-full" src={image} alt="" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
