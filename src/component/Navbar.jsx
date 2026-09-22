import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md py-4 px-8 shadow-lg shadow-cyan-500/10 border-b border-white/10">

      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className='text-3xl font-bold text-white'>
            Babu
            <span className='text-purple-500'>Bhuban</span>

            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
          </a>
        </div>


        <div className='hidden md:flex space-x-10'>

          <a href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
            <span>Home</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full' ></span>
          </a>


          <a href="#about" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
            <span>About</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full' ></span>
          </a>

          <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
            <span>Skills</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full' ></span>
          </a>

          <a href="#project" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
            <span>Project</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full' ></span>
          </a>

          <a href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
            <span>Experience</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full' ></span>
          </a>

          <a href="#certifications" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
            <span>Certifications</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full' ></span>
          </a>

          <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
            <span>Contact</span>
            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full' ></span>
          </a>


        </div>

        {/* Mobile Button */}
        <div className='md:hidden'>
          {
            showMenu ?
              <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> :
              <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
          }
        </div>


      </div>
      {/* Mobile Menus */}

      {
        showMenu &&
        (
          <div className="md:hidden mt-4 bg-slate-900  rounded-lg p-4 flex flex-col h-screen space-y-4 text-center justify-center">

            <a onClick={() => setShowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
              <span>Home</span>

            </a>


            <a onClick={() => setShowMenu(!showMenu)} href="#about" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
              <span>About</span>

            </a>

            <a onClick={() => setShowMenu(!showMenu)} href="#skills" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
              <span>Skills</span>

            </a>

            <a onClick={() => setShowMenu(!showMenu)} href="#project" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
              <span>Project</span>

            </a>

            <a onClick={() => setShowMenu(!showMenu)} href="#experience" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
              <span>Experience</span>

            </a>

            <a onClick={() => setShowMenu(!showMenu)} href="#certifications" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
              <span>Certifications</span>

            </a>

            <a onClick={() => setShowMenu(!showMenu)} href="#contact" className='relative text-white/80 transition duration-300 hover:text-purple-400 group'>
              <span>Contact</span>

            </a>

          </div>
        )
      }
    </nav >
  )
}

export default Navbar
