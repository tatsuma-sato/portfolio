import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUserAlt } from "react-icons/fa";
import validator from "validator";
import { FormStyle } from "../assets/styles/form";

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

    if (validator.isEmail(email) === false) {
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

    if (validator.isMobilePhone(phone, "en-CA") === false) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  return (
    <FormStyle ref={form} onSubmit={handleSubmit} className="">
      <div className="form-content">
        <div className="form-left">
          <div className="form-content">
            <div className="label-logo">
              <svg
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
              className="form-input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-content">
            <div className="label-logo">
              <svg
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
              className={`form-input ${emailError ? "invalid" : null}`}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                isValidEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-content mb-0">
            <div className="label-logo">
              <svg
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
              className={`form-input ${phoneError ? "invalid" : null}`}
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

        <div className="form-right">
          <div className="form-right-container">
            <div className="form-right-logo">
              <svg
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
              className="form-textarea"
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
        className="btn"
        onSubmit={handleSubmit}
        disabled={!name || !email || !phone || !message}
      >
        Send Message
      </button>
    </FormStyle>
  );
};

export default Form;
