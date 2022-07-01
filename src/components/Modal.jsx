import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Overlay } from "../assets/styles/modal";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { workData, setWorkData, setIsModalOpen } = useGlobalContext();
  if (!workData) return null;

  const { title, url, description, image, skills } = workData;
  const handleClose = () => {
    setIsModalOpen(false);
    setWorkData(null);
  };

  return (
    <>
      <Overlay />
      <Wrapper className="modal">
        <div className="modal-header">
          <h1 className="title">{title}</h1>
          <div className="modal-close">
            <FaTimes onClick={handleClose} />
          </div>
        </div>
        <img src={image} alt={title} className="img" />
        <p className="description">{description}</p>
        <p className="skills">skills: {skills}</p>
        <a className="btn" href={url} target="_blank">
          Go to site
        </a>
      </Wrapper>
    </>
  );
};

export default Modal;
