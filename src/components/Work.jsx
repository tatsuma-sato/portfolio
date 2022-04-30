import React, { useState } from "react";
import Modal from "./Modal";

const Work = ({ work }) => {
  const { id, image, skills, title, url, description } = work;

  const [isModalOpen, setIsMpdalOpen] = useState(false);

  return (
    <>
      <div className="work-section relative">
        <div
          className="work w-full lg:h-72 relative"
          onClick={() => setIsMpdalOpen(true)}
        >
          <img src={image} alt={title} className="block w-full h-auto" />
          <div className="overlay absolute top-1/2 w-full opacity-0 transition-all duration-75 ease-in "></div>
        </div>

        {isModalOpen && (
          <div className="modal absolute w-80 h-80 bg-slate-100 top-0 bottom-0 right-0 left-0 m-auto">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <p>{description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Work;
