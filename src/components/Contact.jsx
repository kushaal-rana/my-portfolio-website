import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS for sending emails

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w+)+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (email === "") {
      setErrMsg("Please enter your email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Please enter a valid email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // Send email via EmailJS
      const templateParams = {
        from_name: username,
        from_email: email,
        message: message,
      };

      emailjs
        .send(
          "your_service_id", // Replace with your EmailJS Service ID
          "your_template_id", // Replace with your EmailJS Template ID
          templateParams,
          "your_user_id" // Replace with your EmailJS User ID
        )
        .then(
          (response) => {
            console.log(
              "Email successfully sent!",
              response.status,
              response.text
            );
            setSuccessMsg(
              `Thank you, ${username}. Your message has been sent successfully!`
            );
            setErrMsg("");
            // Clear form fields
            setUsername("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.error("Failed to send email:", error);
            setErrMsg("Something went wrong, please try again.");
          }
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-slate-800 p-6 text-white">
      {/* Flex container for form and text */}
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full lg:pt-32">
        <div className="flex flex-col relative items-center lg:items-start">
          {/* Header with dynamic positioning */}
          <h2 className="text-4xl lg:text-4xl font-semibold inline mb-14 before:content-contact before:absolute before:opacity-100 before:-top-[2rem] before:hidden before:lg:block lg:-mr-7 text-slate-300">
            <span className="block border-b-4 border-gray-500 text-5xl lg:border-none lg:hidden ">
              Contact
            </span>
            <span className="hidden lg:block text-slate-300">Connect Now</span>
          </h2>
        </div>

        {/* Reduced width and added padding for a smaller form */}
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[80%] mx-auto mt-10 h-auto py-8 bg-gradient-to-r from-[#24252933] to-[#22242890] flex flex-col gap-6 p-6 rounded-lg shadow-2xl border border-slate-500">
          <form
            onSubmit={handleSend}
            className="w-full flex flex-col gap-4 lg:gap-5 py-2 lg:py-4"
          >
            {/* Error and Success Messages */}
            {errMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-red-500 text-base font-semibold tracking-wide animate-bounce">
                {errMsg}
              </p>
            )}
            {successMsg && (
              <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                {successMsg}
              </p>
            )}

            {/* Name Input */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
                Your name
              </p>
              <input
                type="text"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`p-2 bg-[#1a1a1a] border-2 border-gray-700 rounded-md text-white focus:outline-none ${
                  errMsg === "Username is required!" &&
                  "outline outline-2 outline-red-500"
                }`}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
                Email
              </p>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`p-2 bg-[#1a1a1a] border-2 border-gray-700 rounded-md text-white focus:outline-none ${
                  errMsg.includes("email") &&
                  "outline outline-2 outline-red-500"
                }`}
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
                Message
              </p>
              <textarea
                placeholder="Enter your message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`p-2 bg-[#1a1a1a] border-2 border-gray-700 rounded-md text-white focus:outline-none ${
                  errMsg === "Message is required!" &&
                  "outline outline-2 outline-red-500"
                }`}
              ></textarea>
            </div>

            <div className="w-full flex justify-center mt-4">
              <button
                type="submit"
                className="text-black font-bold bg-gradient-to-b from-cyan-500 to-cyan-500 px-6 py-3 rounded-md hover:scale-110 duration-300"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
