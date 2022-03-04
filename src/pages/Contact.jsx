import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <section className="bg-black w-screen text-white h-full py-5 grow" >
      <h1 className="text-2xl">Contact Me</h1>
      <div className="form-inner mt-24 mx-auto max-w-6xl w-11/12 bg-darkGray">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
