import React from "react";
import bookStore from "../assets/bookStore.jpg";
import crypto from "../assets/crypto.jpg";
import converter from "../assets/converter.jpg";
import tictactoe from "../assets/tictactoe.jpg";
import timeless from "../assets/timeless.jpg";
import chatty from "../assets/chatty.jpg";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0 }}
      className="max-w-6xl mx-auto p-5 mt-56"
      id="projects"
    >
      <div className="pb-8">
        <p className="text-4xl mb-3 p-2 font-bold custom-color">Projects</p>
        <p className="text-gray-400">Check out some of my recent projects</p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 sm:gap-8 md:gap-4 gap-10"
      >
        <div className="transform transition-transform duration-300 ease-linear hover:scale-105 overflow-hidden shadow-lg shadow-black group container rounded-md flex flex-col justify-center items-center mx-auto bg-cover relative bg-slate-700">
          <img src={chatty} alt="" />
          <div className="opacity-0 group-hover:opacity-95 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>

            <div className="pt-8 text-center">
              <a
                href="https://chat-app-1hvo.onrender.com/"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/saqibbhat48/chat-app"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Repo
                </button>
              </a>
            </div>
          </div>
          <div className="p-2 text-white">
            <h1 className="font-bold text-center text-xl underline">
            Chatty
            </h1>
            <p className="p-1 leading-4">
            A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js), Socket.io, and styled with Tailwind CSS and Daisy UI. The app includes features such as user authentication, real-time messaging, theme selection, and profile management.
            </p>
            <div className="flex gap-4 justify-center mt-2">
              <h3 className="bg-slate-900 p-2 rounded-xl">MERN</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Socket.io</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Tailwind CSS</h3>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 ease-linear hover:scale-105 overflow-hidden shadow-lg shadow-black group container rounded-md flex flex-col justify-center items-center mx-auto bg-cover relative bg-slate-700">
          <img src={bookStore} alt="" />
          <div className="opacity-0 group-hover:opacity-95 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>

            <div className="pt-8 text-center">
              <a
                href="https://bookheaven-gc3e.onrender.com/"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/saqibbhat48/bookStore"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Repo
                </button>
              </a>
            </div>
          </div>
          <div className="p-2 text-white">
            <h1 className="font-bold text-center text-xl underline">
              Book Store
            </h1>
            <p className="p-1 leading-4">
            A full-stack bookstore web app with authentication, cart functionality, and an admin panel. Users can browse books, add to favorites, place COD orders, and track order status. Admins can manage books and orders. 
            </p>
            <div className="flex gap-4 justify-center mt-2">
              <h3 className="bg-slate-900 p-2 rounded-xl">MERN</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Redux</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Tailwind CSS</h3>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 ease-linear hover:scale-105 overflow-hidden shadow-lg shadow-black group container rounded-md flex flex-col justify-center items-center mx-auto bg-cover relative bg-slate-700">
          <img src={timeless} alt="" />
          <div className="opacity-0 group-hover:opacity-95 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>

            <div className="pt-8 text-center">
              <a
                href="https://timelesstrends-bysaqib.netlify.app/"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/saqibbhat48/Timeless-Trends"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Repo
                </button>
              </a>
            </div>
          </div>
          <div className="p-2 text-white">
            <h1 className="font-bold text-center text-xl underline">
              Interior Design Website
            </h1>
            <p className="p-1 leading-4">
              A modern, responsive website for an interior design startup
            </p>
            <div className="flex gap-4 justify-center mt-2">
              <h3 className="bg-slate-900 p-2 rounded-xl">React.js</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Framer Motion</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Tailwind CSS</h3>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 ease-linear hover:scale-105 overflow-hidden shadow-lg shadow-black group container rounded-md flex flex-col justify-center items-center mx-auto bg-cover relative bg-slate-700">
          <img src={tictactoe} alt="" />
          <div className="opacity-0 group-hover:opacity-95 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>

            <div className="pt-8 text-center">
              <a href="https://tictactoe-bysaqib.netlify.app/" target="_main">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/saqibbhat48/Tik-Tac-Toe"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Repo
                </button>
              </a>
            </div>
          </div>
          <div className="p-2 text-white">
            <h1 className="font-bold text-center text-xl underline">
              Tic-Tac-Toe Game
            </h1>
            <p className="p-1 leading-4">
              This entertaining game of tic tac toe that allows two players to
              take turns marking spaces in a 3x3 grid and much more.
            </p>
            <div className="flex gap-4 justify-center mt-2">
              <h3 className="bg-slate-900 p-2 rounded-xl">React.js</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Tailwind CSS</h3>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 ease-linear hover:scale-105 overflow-hidden shadow-lg shadow-black group container rounded-md flex flex-col justify-center items-center mx-auto bg-cover relative bg-slate-700">
          <img src={crypto} alt="" />
          <div className="opacity-0 group-hover:opacity-95 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>

            <div className="pt-8 text-center">
              <a
                href="https://cryptocurrencyinfo-bysaqib.netlify.app/"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/saqibbhat48/Crypto_Currency_Web_App"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Repo
                </button>
              </a>
            </div>
          </div>
          <div className="p-2 text-white">
            <h1 className="font-bold text-center text-xl underline">
              Crypto Currency Web App
            </h1>
            <p className="p-1 leading-4">
              A web application that provides users with information about the
              top 50 cryptocurrencies, crypto news, and upcoming exchanges.
            </p>
            <div className="flex gap-4 justify-center mt-2">
              <h3 className="bg-slate-900 p-2 rounded-xl">React.js</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">React Router</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Tailwind CSS</h3>
            </div>
          </div>
        </div>

        <div className="transform transition-transform duration-300 ease-linear hover:scale-105 overflow-hidden shadow-lg shadow-black group container rounded-md flex flex-col justify-center items-center mx-auto bg-cover relative bg-slate-700">
          <img src={converter} alt="" />
          <div className="opacity-0 group-hover:opacity-95 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"></span>

            <div className="pt-8 text-center">
              <a
                href="https://currencyconverter-bysaqib.netlify.app/"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Live
                </button>
              </a>
              <a
                href="https://github.com/saqibbhat48/Currency-Converter"
                target="_main"
              >
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg hover:bg-black hover:text-white duration-300 ease-linear">
                  Repo
                </button>
              </a>
            </div>
          </div>
          <div className="p-2 text-white">
            <h1 className="font-bold text-center text-xl underline">
              Currency Converter
            </h1>
            <p className="p-1 leading-4">
              Currency Converter is a simple React application that allows users
              to convert currencies based on real-time exchange rates.
            </p>
            <div className="flex gap-4 justify-center mt-2">
              <h3 className="bg-slate-900 p-2 rounded-xl">React.js</h3>
              <h3 className="bg-slate-900 p-2 rounded-xl">Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
