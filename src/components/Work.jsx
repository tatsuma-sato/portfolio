import React, { useState } from "react";
import { Wrapper } from "../assets/styles/work";
import { useGlobalContext } from "../context/context";
import Modal from "./Modal";

const Work = ({ work }) => {
  const { id, image, skills, title, url, description } = work;
  const { isModalOpen, setIsModalOpen, workData, setWorkData } =
    useGlobalContext();

  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    setWorkData(work);
    setIsModalOpen(true);
  };

  return (
    <Wrapper>
      <div
        className="img-container"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img
          src={image}
          alt={title}
          className={`image ${active ? "hover" : null}`}
        />
        <button
          className={`button ${active ? "active" : null}`}
          onClick={handleClick}
        >
          Details
        </button>
      </div>
      {isModalOpen && <Modal />}
    </Wrapper>
  );
};

export default Work;
