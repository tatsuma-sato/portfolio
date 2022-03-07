import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUserAlt } from "react-icons/fa";
import validator from "validator";

const userID = process.env.REACT_APP_EMAILJS_USER_ID;
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

const Form = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
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

  const isValidEmail = (email) => {
    if (email === "") {
      setEmailError(false);
      return;
    }

    if (!validator.isEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const isValidPhone = (phone) => {
    if (typeof phone === String) {
      setPhoneError(true);
      return;
    }
    if (phone === "") {
      setPhoneError(false);
      return;
    }

    if (!validator.isMobilePhone(phone, "en-CA")) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="lg:px-16 lg:py-20 px-8 py-10 text-white text-center"
    >
      <div className="form-container mb-8 flex justify-center lg:justify-around xl:justify-center lg:flex-row flex-col">
        <div className="form-left flex flex-col justify-between basis-5/12 md:px-7 lg:px-0 xl:px-7">
          <div className="mb-12 relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-black border text-white border-black  text-sm hover:border-white   hover:ring-white focus:border-reactBlue focus:outline-none focus:ring-reactBlue block w-full p-2.5 pl-10
              placeholder-gray-400 transition-all duration-300"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-12 relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-black border border-black  text-sm hover:border-white   hover:ring-white focus:border-reactBlue focus:outline-none focus:ring-reactBlue block w-full p-2.5 pl-10
              placeholder-gray-400 transition-all duration-300 peer ${
                emailError
                  ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  : null
              }`}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                isValidEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-12 relative lg:mb-0">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              className={`bg-black border border-black  text-sm hover:border-white   hover:ring-white focus:border-reactBlue focus:outline-none focus:ring-reactBlue block w-full p-2.5 pl-10 placeholder-gray-400 transition-all duration-300 ${
                phoneError
                  ? "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  : null
              }`}
              placeholder="Phone number (123-456-7890)"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                isValidPhone(e.target.value);
              }}
              required
            />
          </div>
        </div>

        <div className="form-right relative basis-5/12 md:px-7 lg:px-0 xl:px-7">
          <div className="relative">
            <div className="flex absolute top-3 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </div>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="bg-black border border-black  text-sm h-full block w-full text-white p-2.5 pl-10 hover:border-white hover:border-white focus:border-reactBlue focus:outline-none focus:ring-reactBlue  md:h-64 placeholder:text-gray-400 transition-all duration-300
            "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-gray-400 bg-black mx-auto border-2 border-black hover:text-reactBlue hover:border-reactBlue focus:ring-4 focus:ring-blue-300 font-medium text-sm  sm:w-auto px-5 py-2.5 text-center  transition-all duration-300 cursor-pointer disabled:hover:border-black disabled:hover:text-gray-400 disabled:focus:ring-black
        disabled:cursor-not-allowed"
        onSubmit={handleSubmit}
        disabled={!name || !email || !phone || !message}
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
