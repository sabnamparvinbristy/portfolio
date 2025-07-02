import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
   const form =useRef();
   const [isSent, setIsSent] =useState(false);


   const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_qugc8uq", 
        "template_vek436s",  
        form.current,
        "qSbME72dnSpYW8lI2" 
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); 
          toast.success("Message sent successfully! ✅", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };





  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
       {/* Toast Container */}
      <ToastContainer />

      {/* section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
  <span className="relative inline-block group">
    <span
      className="relative z-10 font-[Dancing Script]"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      CONTACT
    </span>
    <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 h-[2px] w-0 bg-[#2EC4B6] transition-all duration-300 group-hover:w-full"></span>
  </span>
</h2>

        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-xl mx-auto leading-relaxed">
          Get in touch—I'd welcome your message.
        </p>
      </div>

      
      <div
        className="relative mt-8 w-full max-w-md p-6 sm:p-8 rounded-3xl 
          bg-white/5 backdrop-blur-xl border border-white/10
          shadow-none hover:shadow-[0_0_24px_3px_rgba(168,85,247,0.2)] hover:bg-[rgba(168,85,247,0.07)]
          transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        
        <span
          className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-[#2EC4B6] transition-all duration-300 group-hover:w-full"
          style={{ transform: "translateX(-50%)" }}
        ></span>

        <h3 className="text-xl font-semibold text-white text-center mb-6">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form  ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-white/20 
              focus:outline-none focus:border-purple-500 hover:border-purple-500 transition-colors duration-300"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-white/20 
              focus:outline-none focus:border-purple-500 hover:border-purple-500 transition-colors duration-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-white/20 
              focus:outline-none focus:border-purple-500 hover:border-purple-500 transition-colors duration-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-white/20 
              focus:outline-none focus:border-purple-500 hover:border-purple-500 transition-colors duration-300"
          />

          <button
  type="submit"
  className="
    w-full py-3 font-semibold text-white
    bg-gradient-to-r from-[#6b21a8] via-[#7c3aed] to-[#2ec4b6]
    rounded-full
    shadow-lg shadow-[#7c3aed]/60
    hover:brightness-110 hover:scale-105
    transition duration-300 ease-in-out
    focus:outline-none focus:ring-4 focus:ring-[#2ec4b6]/50
  "
>
  Send
</button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
