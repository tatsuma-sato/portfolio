import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../images/pcimg.jpg";
import { FaReact } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div
        className="bg-blend-overlay text-white bg-gray-700 bg-no-repeat bg-center bg-cover h-screen relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80)",
          width: "100vw",
          height: "calc(100vh - 100px)",
        }}
      >
        <div className="absolute inset-0 opacity-90 h-full flex flex-col">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <h1 className="font-bold text-gold text-center tracking-wider text-8xl mt-4">
              Tatsuma Sato
            </h1>

            <p className="mt-3 pl-5 pr-5 text-4xl tracking-wide font-bold text-center">
              I am a{" "}
              <span className="text-gold">
                <FaReact style={{display: 'inline-block'}} className="mr-1"/>
                React&nbsp;
              </span>
              Developer
            </p>

            <div className="mt-8 text-center flex justify-center gap-20">
              <a
                href="#"
                className="w-64 bg-black border-solid border-2 border-gold  hover:bg-gold hover:text-black hover:border-solid  hover:border-2 text-white font-bold text-center text-2xl py-2 px-4 rounded"
              >
                Download Resume
              </a>
              <Link
                to="/about"
                className="w-64 bg-black border-solid border-2 border-gold  hover:bg-gold hover:text-black text-white text-2xl font-bold text-center py-2 px-4 rounded"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span>{" "}
                  <span className="block text-indigo-600 xl:inline">
                    online business
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div> */}
    </>
  );
};

export default Home;
