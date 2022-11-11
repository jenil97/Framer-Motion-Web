import React from "react";
import Img1 from "../assets/portfolio/1.png";
import Img2 from "../assets/portfolio/2.png";
import Img3 from "../assets/portfolio/3.png";
import Img4 from "../assets/portfolio/4.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="section ">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <div className="flex flex-col lg:items-start mt-8 lg:mt-6">
            <h1 className="h1 cursor-default">Portfolio</h1>
            <p className="mb-12 max-w-sm cursor-default">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <b> Exercitationem, veritatis.</b> Veritatis illum aut,
              reprehenderit sed dolorem dolore.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </div>
          {/* image grid */}
          <div className="grid grid-cols-2 lg:gap-2">
            {/* image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
