import React from "react";
import { Wrapper } from "../assets/styles/contact";
import Form from "../components/Form";

const Contact = () => {
  return (
    <Wrapper className="">
      <h1 className="section-title">Contact Me</h1>
      {/* <div className="form-inner lg:mt-24 md:my-12 my-10 mx-auto max-w-6xl w-11/12 bg-darkGray"> */}
      <div className="form-container">
        <Form />
      </div>
    </Wrapper>
  );
};

export default Contact;
