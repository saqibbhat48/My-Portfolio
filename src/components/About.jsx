import React from "react";
import view from "../assets/view.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-white max-w-6xl mx-auto mt-56" id="about">
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
              Hi, I'm Saqib Ismail Bhat, a passionate and detail-oriented MERN
              Stack Developer dedicated to creating robust, scalable, and
              visually appealing web applications. I specialize in crafting
              seamless full-stack solutions using MongoDB, Express.js, React.js,
              and Node.js. With a strong foundation in frontend development, I
              excel in building intuitive and responsive user interfaces. My
              backend expertise allows me to design and implement efficient
              server-side architectures, ensuring a smooth flow of data and
              functionality.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0 }}
          className="rounded-3xl overflow-hidden max-w-max mx-auto my-8 md:my-0 "
        >
          <img src={view} width={300} height={300} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
