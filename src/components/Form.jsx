import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUserAlt } from "react-icons/fa";

const userID = process.env.REACT_APP_EMAILJS_USER_ID;
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Form = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (result) => {
        console.log(result.text);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="px-16 py-20 text-white text-center"
    >
      <div className="form-container mb-8 flex justify-center">
        <div className="form-left flex flex-col justify-between basis-5/12 px-7">
          <div className="mb-12">
            <input
              type="text"
              id="name"
              name="name"
              className="bg-black border text-white border-black  text-sm hover:border-white   hover:ring-white focus:border-gold focus:outline-none focus:ring-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
              placeholder-gray-400 transition-all duration-300"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-12">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-black border border-black  text-sm hover:border-white   hover:ring-white focus:border-gold focus:outline-none focus:ring-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              placeholder-gray-400 transition-all duration-300"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-black border border-black  text-sm hover:border-white   hover:ring-white focus:border-gold focus:outline-none focus:ring-gold block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              placeholder-gray-400 transition-all duration-300"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-right basis-5/12 px-7">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="bg-black border border-black  text-sm h-full block w-full text-white p-2.5hover:border-white hover:border-white focus:border-gold focus:outline-none focus:ring-gold  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            placeholder:text-gray-400 transition-all duration-300
            "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="text-gray-400 bg-black mx-auto border-2 border-black hover:text-gold hover:border-gold focus:ring-4 focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300"
        onSubmit={handleSubmit}
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
