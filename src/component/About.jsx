import React from 'react'
import { motion } from 'framer-motion'
import nameimg from '../assets/nameimg.png'
import { FaCode, FaChartBar, FaUsers } from 'react-icons/fa'

const About = () => {

  const aboutInfo = [
    {
      title: "Coding",
      description:
        "I enjoy coding, problem-solving, and building real-world projects.",
      icon: FaCode
    },
    {
      title: "Data Analytics",
      description:
        "I explore data using Python, Pandas, and visualization tools.",
      icon: FaChartBar
    },
    {
      title: "Communication",
      description:
        "I continuously improve my communication, teamwork, and analytical skills.",
      icon: FaUsers
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className="min-h-screen py-20 bg-slate-900"
    >

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          About <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Get to know about my background and passion
        </p>

        {/* Image + Journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">

            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-74 h-74 md:w-96 md:h-96 object-cover rounded-2xl"
              src={nameimg}
              alt="Profile"
            />

          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >

            <div className="rounded-2xl p-8">

              <h2 className="text-2xl font-bold mb-6 text-white">
                My <span className='text-purple-500'>Journey</span>
              </h2>

              <p className="text-gray-300 mb-6">
                My college journey has helped me grow through coding,
                self-development, and continuous learning. I developed
                strong programming skills, worked on projects, practiced
                problem-solving, and explored Data Analytics to build a
                successful career in technology.
              </p>

              <p className="text-gray-300 mb-12">
                During my college journey, I have developed strong
                technical skills through coding, problem-solving, and
                real-world projects. I continuously improve my communication,
                teamwork, and analytical abilities while exploring Data
                Analytics and modern technologies.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {aboutInfo.map((data, index) => {

                  const Icon = data.icon

                  return (
                    <div
                      key={index}
                      className="bg-slate-800 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                    >

                      {/* Icon */}
                      <div className="text-purple-500 text-4xl mb-4">
                        <Icon />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {data.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed">
                        {data.description}
                      </p>

                    </div>
                  )

                })}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.div>
  )
}

export default About