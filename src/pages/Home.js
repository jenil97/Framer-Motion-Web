import React from "react";
import WomanImg from "../assets/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
// import { CursorContext } from "../context/CursorContext";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="w-full lg:mt-36 pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 cursor-default">
              photographer <br /> & film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 cursor-default">
              Los Angeles, USA
            </p>
            <Link to={"/contact"} className="btn mb-[30px] lg:-mt-4 mt-4">
              hire me
            </Link>
          </motion.div>
          {/* image */}
          <div className="flex justify-end">
            <div>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt=""
                className="lg:w-[530px] lg:h-[650px] lg:mr-[170px]"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
