import React from "react";
import heroimage from "../assets/ppic.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import resume from "../assets/Saqib_Bhat_Resume_mern.pdf";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto py-8"
        id="home"
      >
        <div className="col-span-1 my-auto mx-auto max-w-[300px] h-auto lg:w-[400px] rounded-full overflow-hidden">
          <img src={heroimage} alt="hero image" />
        </div>

        <div className="col-span-2 px-5 my-auto">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="custom-color">I'm a</span> <br />
            <TypeAnimation
              sequence={["Frontend Dev", 1000, "Backend Dev", 1000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>

          <p className="text-white sm:text-lg my-6 lg:text-xl">
          Hi, I'm Saqib Ismail Bhat! 👋
           a passionate MERN Stack Developer specializing in crafting full-stack applications that are both functional and visually appealing. With expertise in React.js, Node.js, MongoDB, and Express.js, I build seamless user experiences from front to back.
          </p>

          <div>
            <a
              href={resume}
              download={"Saqib_Bhat_Resume.pdf"}
              className="border-2 border-gray-400  px-4 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white ease-linear duration-300 hover:text-orange-600 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border-orange-600 font-bold"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-4 py-3 w-full ease-linear duration-300 rounded-xl border-2 border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
