import React from "react";

import Women from "../assets/about/woman.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={Women} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1 cursor-default">About me</h1>
            <p className="mb-12 max-w-sm cursor-default">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
