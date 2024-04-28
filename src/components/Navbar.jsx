import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { motion } from "framer-motion"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = ()=>{
        setNav(!nav)
    }

  return (
    <>

    <motion.div initial={{x:-200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:0}} className='bg-[#252632] h-20 flex justify-between items-center p-4 max-w-6xl mx-auto'>

        <h1 className='text-3xl font-bold custom-color'>Saqib Bhat</h1>
        <ul className='hidden md:flex text-white gap-10 '>
            <li className='hover:text-orange-500 ease-linear duration-200 hover:bg-slate-600 p-2 text-center rounded-md font-bold'><a href='#home'>Home</a></li>
            <li className='hover:text-orange-500 ease-linear duration-200 hover:bg-slate-600 p-2 text-center rounded-md font-bold'><a href='#about'>About</a></li>
            <li className='hover:text-orange-500 ease-linear duration-200 hover:bg-slate-600 p-2 text-center rounded-md font-bold'><a href='#projects'>Projects</a></li>
            <li className='hover:text-orange-500 ease-linear duration-200 hover:bg-slate-600 p-2 text-center rounded-md font-bold'><a href='#contact'>Contact Me</a></li>
        </ul>

        <div onClick={handleNav} className='bg-[#252632] md:hidden'>
            {nav ? <AiOutlineClose size={20} color='white'/> : <AiOutlineMenu size={20} color='white'/>}
        </div>
      
    </motion.div>

    <div className={nav ? 'fixed left-0 top-0 h-full bg-[#252632] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] ease-in-out duration-500 md:hidden'}>

        <h1 className='text-3xl font-bold custom-color m-5'>Saqib Bhat</h1>
        <ul className='p-8 text-2xl text-white flex flex-col '>
            <li onClick={handleNav} className='hover:text-orange-500 ease-linear duration-200 hover:bg-slate-600 p-2 text-center rounded-md font-bold'><a href='#home'>Home</a></li>
            <li onClick={handleNav} className='hover:text-orange-500 ease-linear duration-200 hover:bg-slate-600 p-2 text-center rounded-md font-bold'><a href='#about'>About</a></li>
            <li onClick={handleNav} className='hover:text-orange-500 ease-linear duration-200 hover:bg-slate-600 p-2 text-center rounded-md font-bold'><a href='#projects'>Projects</a></li>
            <li onClick={handleNav} className='hover:text-orange-500 ease-linear duration-200 hover:bg-slate-600 p-2 text-center rounded-md font-bold'><a href='#contact'>Contact Me</a></li>
        </ul>
      
    </div>

    </>
  )
}

export default Navbar
