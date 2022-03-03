import React, { useContext, useState } from "react";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/context";
import { works } from "../work/works";

const Work = () => {
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

  const { workData, setWorkData } = useGlobalContext();

  return (
    <section className="bg-black w-screen text-white h-full">
      <h1 className="text-2xl font-bold mb-4">Works</h1>
      <main>
        <div className="flex flex-wrap justify-between">
          {works.map((work) => {
            return (
              <div className="text-wihte basis-5/12 mb-12" key={work.id}>
                <div
                  className="cursor-pointer overflow-hidden h-80 relative"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                >
                  <img
                    src={work.image}
                    className="h-full w-full hover:scale-125 hover:opacity-50 transition duration-500"
                    alt=""
                    onClick={() => setWorkData(work)}
                    data-modal-toggle="defaultModal"
                  />
                  <p className="absolute hidden font-bold text-2xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Read More
                  </p>
                </div>
                <h1>{work.title}</h1>
              </div>
            );
          })}
        </div>
      </main>
      <Modal />
    </section>
  );
};

export default Work;
