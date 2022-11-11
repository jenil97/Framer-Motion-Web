import React from "react";
import woman from "../assets/contact/woman.png";

const Contact = () => {
  return (
    <div className="section bg-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/* bg */}
          <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10">
            bg
          </div>
          {/* text & form */}
          <div className="lg:flex-1 lg:pt-12 px-4">
            <h1 className="h1 cursor-default">Contact me</h1>
            <p className="mb-12 cursor-default">
              I would love to get suggestions from you.
            </p>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[40px] bg-transparent font-secondary w-full placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[40px] bg-transparent font-secondary w-full placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full placeholder:text-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[30px] mt-4 mx-auto lg:mx-0 self-start">
                Send it
              </button>
            </form>
          </div>
          {/* image */}
          <div className="lg:flex-1">
            <img src={woman} alt="" className="lg:w-[500px] h-[640px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
