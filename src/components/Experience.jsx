import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      
      className="max-w-6xl mx-auto p-5 mt-56"
      id="work"
    >
      <motion.div initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0 }} className="pb-8">
        <h1 className="text-4xl mb-3 font-bold custom-color">
          Work Experience
        </h1>
      </motion.div>

      <div className="grid  md:grid-cols-3 gap-4">
        <motion.div initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0 }} className="col-span-3 text-white bg-slate-900 rounded-lg p-4">
          <h1 className="text-3xl">Frontend Developer Intern</h1>
          <h2 className="text-2xl">Unified Mentor Private Limited</h2>
          <h3 className="text-xl">15/03/2024 - 15/04/2024</h3>
          <ul className="text-white p-2">
            <li>- Collaborated on various web development projects using React.js,
            HTML, CSS, Tailwind CSS and JavaScript.</li>
            <li>- Developed responsive user interfaces
            and interactive components using React.js, enhancing the overall
            user experience.</li>
            <li>- Utilized React components and state management to
            efficiently handle data and create dynamic web applications.</li>
            <li>-
            Implemented React Router for seamless navigation and routin within the web applications.</li>
            <li>- Worked closely with the team to integrate
            RESTful APIs and consume data in React components.</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Experience;
