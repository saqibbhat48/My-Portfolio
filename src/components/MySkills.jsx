import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import python from '../assets/python.png'
import nodejs from '../assets/nodejs.png'
import mongo from '../assets/mongodb.png'
import express from '../assets/express.png'
import { motion } from "framer-motion"


const MySkills = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0 }} className='py-4 px-2'>
    <div className='bg-slate-900 text-white lg:h-36 max-w-6xl mx-auto grid grid-cols-3 gap-4 place-items-center lg:flex lg:justify-between lg:items-center border-2 border-gray-400 '>

        <h2 className='custom-color  text-2xl md:text-4xl font-bold m-4'>
            My <br/> Tech <br/> Stact
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={html} alt='' width={100} height={100} />
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={css} alt='' width={100} height={100} />
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={javascript} alt='' width={100} height={100} />
            <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={react} alt='' width={100} height={100} />
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={nodejs} alt='' width={100} height={100} />
            <p className='mt-2'>Node.js</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={express} alt='' width={100} height={100} />
            <p className='mt-2'>Express.js</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={mongo} alt='' width={100} height={100} />
            <p className='mt-2'>MongoDB</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={tailwind} alt='' width={100} height={100} />
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={github} alt='' width={100} height={100} />
            <p className='mt-2'>Git & Github</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-20 md:w-24'>
            <img src={python} alt='' width={100} height={100} />
            <p className='mt-2'>Python</p>
        </div>
      
    </div>
    </motion.div>
  )
}

export default MySkills
