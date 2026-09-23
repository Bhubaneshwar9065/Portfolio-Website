import React from 'react'
import { motion } from "framer-motion"

const Work = () => {

  const workData = [
    {
      role: "Full Stack Developer Intern",
      duration: "2025 - Present",
      company: "CodeClause",
      description:
        "Worked on full-stack web development using React, Node.js, Express and MongoDB."
    },

    {
      role: "JAVA and DSA",
      duration: "2024 - Present",
      company: "Learning & Practice",
      description:
        "Practicing Java programming, Data Structures, Algorithms and solving coding problems."
    },

    {
      role: "SPI",
      duration: "2024 - 2025",
      company: "Quality Based",
      description:
        "Worked on quality production concepts and practical Work."
    },

    {
      role: "Data Analyst",
      duration: "2025 - Present",
      company: "Freelance / Personal Projects",
      description:
        "Analyzing datasets using Python, Pandas, NumPy and creating visualizations with Matplotlib and Seaborn."
    },

    {
      role: "Python Data Analyst",
      duration: "2024 - 2025",
      company: "Personal Projects",
      description:
        "Built data analysis projects using Python, Pandas, Matplotlib, Seaborn and Streamlit."
    },

    {
      role: "Data Operator",
      duration: "2025 - 2026",
      company: "SPARK MINDA Pune-1",
      description:
        "Handled data entry, verification, documentation, and record management efficiently"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="min-h-screen py-20 bg-slate-900"
    >

      {/* Heading */}
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Work
          <span className="text-purple-500"> Experience</span>
        </h2>

        <p className="text-gray-400 text-center mx-auto mb-16">
          My Professional Journey so far
        </p>


        {/* Timeline */}
        <div className="max-w-3xl mx-auto">

          <div className="space-y-12">

            {workData.map((data, index) => (

              <div
                key={index}
                className="
                  relative
                  pl-12
                  before:content-['']
                  before:absolute
                  before:left-0
                  before:top-0
                  before:w[2px]
                  before:h-full
                  before:bg-purple-600
                "
              >

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left[-11px]
                    top-0
                    w-6
                    h-6
                    rounded-full
                    bg-purple-500
                    z-10
                    shadow-lg
                    shadow-purple-500/40
                  "
                />

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="
                    w-full
                    bg-[#2f2f2f]
                    rounded-2xl
                    p-6
                    cursor-pointer
                    hover:bg-[#353535]
                    transition-all
                    duration-300
                  "
                >

                  {/* Top Section */}
                  <div className="flex justify-between items-start gap-4">

                    {/* Left Content */}
                    <div className="flex-1">

                      {/* Role / Title */}
                      <h3 className="
                        text-xl
                        font-bold
                        text-white
                        mb-2
                      ">
                        {data.role}
                      </h3>

                      {/* Company */}
                      <p className="
                        text-purple-400
                        font-semibold
                        text-sm
                        mb-3
                      ">
                        {data.company}
                      </p>

                      {/* Description */}
                      <p className="
                        text-gray-400
                        text-sm
                        leading-6
                        max-w-2xl
                      ">
                        {data.description}
                      </p>

                    </div>


                    {/* Duration */}
                    <span
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-purple-900/60
                        text-purple-400
                        text-sm
                        font-semibold
                        whitespace-nowrap
                      "
                    >
                      {data.duration}
                    </span>

                  </div>

                </motion.div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default Work