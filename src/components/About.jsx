import React from "react";
import view from "../assets/view.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-white max-w-6xl mx-auto mt-48" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="mt-4 md:mt-0 text-left flex"
        >
          <div className="my-auto mx-6">
            <h2 className="custom-color text-4xl font-bold mb-4">About me</h2>
            <p className="text-base lg:text-lg">
            Hello! 👋 As a frontend developer with an eye for designing fluid online experiences, my name is Saqib Ismail Bhat. HTML, CSS, JavaScript, Tailwind CSS, React.js, and the strength of Git and GitHub are all part of my toolkit. I have a strong love for turning designs into vibrant, intuitive user interfaces that make an impact. I'm excited to join your team and contribute my abilities and energy. Together, let's create something truly amazing!
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="rounded-3xl overflow-hidden max-w-max mx-auto my-8 md:my-0 ">
          <img src={view} width={300} height={300} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
