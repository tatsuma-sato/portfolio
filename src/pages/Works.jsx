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

  const { setWorkData } = useGlobalContext();

  return (
    <section className="bg-black w-screen grow text-white h-full py-5">
      <h1 className="lg:text-2xl md:text-xl font-bold mb-4">Works</h1>
      <main className="px-4 md:px-0">
        <div className="flex flex-col md:flex-row flex-wrap justify-between">
          {works.map((work) => {
            return (
              <div className="text-wihte basis-5/12 mb-12" key={work.id}>
                <div
                  className="cursor-pointer overflow-hidden lg:h-80 md:h-48 relative"
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
                  <p className="absolute hidden font-bold text-2xl text-reactBlue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Details
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
