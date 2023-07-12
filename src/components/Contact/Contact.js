import React from "react";
import Title from "../Home/Title";
import { FiSend } from "react-icons/fi";
import axios from "axios";

const Contact = () => {
  const [clientName, setClientName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [messages, setMessages] = React.useState("");

  // ===================Error Message Start Here ========================
  const [errClientName, setErrClientName] = React.useState(false);
  const [errEmail, setErrEmail] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState(false);
  // ===================Error Message End Here ========================

  // ===================Success Message Start Here ========================
  const [successMsg, setSuccessMsg] = React.useState("");
  // ===================Success Message End Here ========================

  // =================== Email validation Start here ========================
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  // =================== Email validation End here ========================

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }

    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }

    if (!messages) {
      setErrMessage(true);
    }

    if (
      clientName !== "" &&
      email !== "" &&
      messages !== "" &&
      EmailValidation(email)
    ) {
      axios.post("https://getform.io/f/2a57aced-c8f6-469f-be16-9bb2369a951b", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccessMsg(
        `Hello dear ${clientName} , Your message has been sent successfully. Thank You for your time...!`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div>
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 flex justify-between gap-20">
        <div className="w-1/2">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center">
              Address :
            </span>
            Kolkata, India
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center">
              Phone No. :
            </span>
            +91 9123922703
          </p>
        </div>
        <div className="w-1/2">
          <p className="flex justify-between w-full text-base text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center">
              Email :
            </span>
            kingston.amit9830@gmail.com
          </p>
          <p className="flex justify-between w-full text-base text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-xs font-titlefont font-medium px-2 rounded-md flex items-center justify-center">
              Freelance , OpenSource , OnSite :
            </span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="text-center text-base font-titlefont p-20 text-designColor">
            {successMsg}
          </p>
        ) : (
          <form
            id="fprm"
            action="https://getform.io/f/2a57aced-c8f6-469f-be16-9bb2369a951b"
            method="POST"
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200  outline-none duration-300`}
                type="text"
                placeholder="Full Name"
                required
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              cols="30"
              rows="4"
              placeholder="Your Message......"
              className={`${
                errMessage
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              }
              w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200  focus-visible:border-designColor outline-none duration-300 resize-none`}
              required
            ></textarea>
            <button
              onClick={handleSend}
              className="text-lg border-b-2 border-designColor w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200"
            >
              Send Message
              <span className="mt-1 ml-2 text-designColor">{<FiSend />}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
