import React from "react";
import Form from "../components/Form";

const Contact = () => {
  return (
    <section className="bg-black w-screen text-white h-full py-5 grow">
      <h1 className="lg:text-2xl md:text-xl font-bold">Contact Me</h1>
      <div className="form-inner lg:mt-24 md:my-12 my-10 mx-auto max-w-6xl w-11/12 bg-darkGray">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
