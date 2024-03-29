import React, { useState } from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactSection = () => {
  const[pending,setPending]=useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setPending(true);

    emailjs.sendForm('service_irawkld', 'template_1vf90ih', form.current, '0HKOVDl2mwsgYy9MI')
      .then((result) => {
          setPending(false);
          console.log(result.text);
          alert("Message recieved succesfully!")
          form.current.reset();
      }, (error) => {
          setPending(false);
          console.log(error.text);
          alert("Sorry, there was some error!")
          form.current.reset();
      });
  };
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36 "
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Get Started!
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10">
            Contact me
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:aadyavibhuti30@gmail.com"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              Email Me:
            </a>
            
          </div>
          <div className="flex gap-2 mt-2">
            <a href="https://github.com/Aadyav-21">
              <AiFillGithub className="text-white text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/aadya-vibhuti-796053265/">
              <AiFillLinkedin className="text-white text-2xl" />
            </a>
            <a href="https://www.instagram.com/_a.a.d.y.a_21/">
              <AiFillInstagram className="text-white text-2xl" />
            </a>
          </div>
          <h2 className="text-2xl font-bold font-mono text-white text-center">
            OR
          </h2>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col p-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              className="bg-transparent p-3 outline-none border focus:border-purple-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
              placeholder="Enter your message"
            />
            <button
              disabled={pending ? true : false}
              type="submit"
              className="flex flex-row px-3 py-2 text-lg lg:text-2xl bg-purple-500 hover:bg-purple-600 border font-bold text-white rounded-lg "
            >
              {pending ? "Loading..." : "Send Message"}
              <FaTelegramPlane className="mt-1 ml-2"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;