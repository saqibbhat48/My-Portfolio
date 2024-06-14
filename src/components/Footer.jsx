import React from 'react'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import git from '../assets/git.png'


const Footer = () => {
  return (
    <div className='bg-slate-950'>
      <div className='max-w-6xl sm:h-36 p-12 flex flex-col items-center  mx-auto'>
      <div className='flex gap-10'>
      <span className='custom-color font-bold'>Saqib Bhat</span>
      <p className='text-gray-300'>bhatsaqib48@gmail.com</p>
      </div>

      <div className='flex gap-5 mt-4 bg-slate-900 px-4 py-2 rounded-md'>
        <div className='hover:scale-125 duration-300'>
        <a href="https://www.instagram.com/saqii.48/" target='_main'><img src={insta} width={20} /></a>
        </div>
        <div className='hover:scale-125 duration-300'>
        <a href="https://www.linkedin.com/in/saqib-ismail-bhat-00942b254/" target='_main'><img src={linkedin} alt='LinkedIn' width={20} className='bg-white rounded-sm'/></a>
        </div>
        <div className='hover:scale-125 duration-300'>
        <a href="https://github.com/saqibbhat48" target='_main'><img src={git} alt='Github' width={20} className='bg-white rounded-sm'/></a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
