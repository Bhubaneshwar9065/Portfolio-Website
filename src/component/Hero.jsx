import React from 'react'
import { motion } from 'framer-motion'
import Image from '../assets/Image.png'


const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: false }}
      id='home'
      className='min-h-screen flex items-center pt-20 bg-slate-900'
    >
      {/* Left side div */}
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/2 mb-10 md:md-0'>
          <h1 className='trxt-4xl md:text-6xl font-bold md-4'>Hi, I'm <span className='text-purple-700'>Bhubaneshwar</span><span className='text-purple-400'>Kumar</span></h1>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'><span className='text-green-500'>Full Stack Developer</span></h2>
          <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'><span className='text-green-500'>Data Analytics</span></h2>
          <p className='text-lg text-gray-400 mb-8'>I create stunning Data and Web experiences with modern technologies and innovative design.</p>

          <div className='flex space-x-4'>
            <a href="Project" className='px-6 py-2 sm:px-5 sm:py-2.5
             md:px-6 md:py-3  bg-purple-500  hover:bg-purple-700  text-white
             rounded-lg font-medium transition-all duration-300'>Project Work</a>

            <a href="Contact" className='px-6 py-2 sm:px-5 sm:py-2.5
             md:px-6 md:py-3  bg-purple-500  hover:bg-purple-700  text-white
             rounded-lg font-medium transition-all duration-300'>Contact Me</a>
          </div>
        </div>

        {/* Right side div */}
        <div className='md:w-1/2 flex justify-center'>
          <div className="relative w-64 h-64 md:w-80 md:h-80">

            {/* Purple Glow / Border */}
            <div className=" absolute inset-0 rounded-full from-purple-500 to-pink-600 blur-md opacity-80 animate-pulse-slow"
            ></div>

            {/* Profile Image */}
            <motion.img

              animate={{ y: [0, -25, 0] }}

              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}

              className=" relative z-10 w-full h-full rounded-full object-cover object-center border-4 border-purple-500 shadow-2xl shadow-purple-500/40" src={Image}
              alt="Portfolio" />

          </div>

        </div>
      </div>

    </motion.div>
  )
}

export default Hero
