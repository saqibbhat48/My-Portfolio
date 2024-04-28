import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MySkills from './components/MySkills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"



function App() {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 2000);
    setLoad(false)
  }, [])
  

  return (
    <>
     {load ? <> 
     <Navbar/>
     <HeroSection/>
     <About/>
     <MySkills/>
     <Projects/>
     <Contact/>
     <Footer/> </>
     : <div className='w-full h-[90vh] flex justify-center items-center gap-4'>
      <motion.p initial={{y:-200, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:1, delay:0}} className='text-3xl sm:text-5xl md:text-7xl lg:text-9xl custom-color text-center'>Welcome <br />to my Portfolio</motion.p>
     </div> }
    </>
  )
}

export default App
