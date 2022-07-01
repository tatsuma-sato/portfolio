import React, { useContext, useState } from "react";
import { Wrapper } from "../assets/styles/works";
import Modal from "../components/Modal";
import Work from "../components/Work";
import { useGlobalContext } from "../context/context";
import { works } from "../work/works";

const Works = () => {
  const { isModalOpen, setIsModalOpen, setWorkData } = useGlobalContext();

  const onMouseOver = (e) => {
    const targetDiv = e.target.parentNode;
    const text = targetDiv.lastChild;
    text.classList.add("block");
    text.classList.remove("hidden");
  };

  const onMouseLeave = (e) => {
    const targetDiv = e.target.parentNode;
    const text = targetDiv.lastChild;
    text.classList.remove("block");
    text.classList.add("hidden");
  };

  return (
    <Wrapper>
      <h1 className="section-title">Works</h1>
      <main className="container">
        <div className="content">
          {works.map((work) => {
            return (
              <Work work={work} key={work.id} />
              // <div className="text-wihte basis-5/12 mb-12" key={work.id}>
              //   <div
              //     className="cursor-pointer overflow-hidden lg:h-80 md:h-48 relative"
              //     onMouseOver={onMouseOver}
              //     onMouseLeave={onMouseLeave}
              //     onClick={() => {
              //       setWorkData(work);
              //       setIsModalOpen(true);
              //     }}
              //   >
              //     <img
              //       src={work.image}
              //       className="h-full w-full hover:scale-125 hover:opacity-50 transition duration-500"
              //       alt=""
              //       data-modal-toggle="defaultModal"
              //     />
              //     <p className="absolute hidden font-bold text-2xl text-reactBlue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              //       Details
              //     </p>
              //   </div>
              //   <h1>{work.title}</h1>
              // </div>
            );
          })}
        </div>
      </main>
    </Wrapper>
  );
};

export default Works;
