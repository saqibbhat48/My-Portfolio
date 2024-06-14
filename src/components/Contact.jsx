import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:2, delay:0}} className="max-w-6xl mx-auto sm:py-10 p-5 mt-56" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight custom-color mb-2">
          Contact Me
        </h2>
      </div>

      <div className=" max-w-[50rem] mx-auto">
        <div className=" bg-slate-800 rounded-xl">
          <div className="p-10">
            <form action="https://getform.io/f/pboxqvga" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className=" relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className=" w-full p-4 bg-slate-600 hover:bg-slate-700 text-white placeholder-gray-400 border-2 border-gray-400 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div>
                  <div className=" relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className=" w-full p-4 bg-slate-600 hover:bg-slate-700 text-white placeholder-gray-400 border-2 border-gray-400 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      type="text"
                      name="message"
                      required
                      placeholder="Your Message"
                      className="bg-slate-600 hover:bg-slate-700 w-full p-4 text-white placeholder-gray-400 border-2 border-gray-400 rounded-md focus:outline-none focus:border-pink-600"
                      rows={4}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-custom-color rounded-md hover:text-orange-600"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
