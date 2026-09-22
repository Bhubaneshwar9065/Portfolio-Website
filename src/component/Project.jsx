import React from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { FaArrowRight } from 'react-icons/fa'

import project1 from "../assets/project1.avif"
import project2 from "../assets/project2.avif"
import project3 from "../assets/project3.avif"
import project4 from "../assets/project4.avif"
import project5 from "../assets/project5.avif"
import project6 from "../assets/project6.avif"

const Project = () => {

  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website built with React and Tailwind CSS.",
      image: project1,
      tech: ["React", "Tailwind CSS", "Framer Motion"]
    },

    {
      title: "Air Pollution Analysis",
      description:
        "A data analysis and prediction project using Python and machine learning.",
      image: project2,
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy", "Data Analysis", "Machine Learning",]
    },

    {
      title: "Fitness Tracker",
      description:
        "A Mobile app for tracking workouts, nutrition, and heaith merrics.",
      image: project3,
      tech: ["Node.js", "Express", "MongoDB", "SQL", "Chart.js"]
    },

    {
      title: "RunFull – Running Tracker",
      description:
        "A web application for tracking running activities, distance, speed, calories, and workout performance.",
      image: project4,
      tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"]
    },

    {
      title: "Air Pollution Analysis & Prediction",
      description:
        "A data analysis and machine learning application that analyzes air quality data and predicts pollution levels.",
      image: project5,
      tech: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Streamlit"]
    },

    {
      title: "Bank Management System",
      description:
        "A desktop-based banking application for managing accounts, deposits, withdrawals, transactions, and customer records.",
      image: project6,
      tech: ["Java", "Java Swing", "MySQL", "JDBC"]
    }
  ]

  return (
    <motion.section
      id="project"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 bg-slate-900"
    >

      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-12">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
            />
          ))}

        </div>
        <div className='text-center mt-12'>
          <a href="#" className="flex-1 text-center px-4 py-2 border border-purple-500 rounded-lg font-medium text-white hover:bg-purple-800 transition"><span className=" text purple-600">View More Project</span></a>
          <FaArrowRight />

        </div>


      </div>

    </motion.section>
  )
}

export default Project