import React from 'react'

import { motion } from "framer-motion"

const ProjectCard = ({ title, description, image, tech = [] }) => {
  return (
    <div>

      {/* Project Card */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-800 rounded-2xl overflow-hidden cursor-pointer"
      >

        {/* Project Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />

        {/* Content */}
        <div className="p-6">

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-5">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-6">

            <a
              href="#"
              className="flex-1 text-center px-4 py-2 bg-purple-600 rounded-lg font-medium text-white hover:bg-purple-800 transition">View Demo</a>

            <a
              href="#"
              className="flex-1 text-center px-4 py-2 border border-purple-500 rounded-lg font-medium text-white hover:bg-purple-800 transition">Code</a>

          </div>

        </div>
      </motion.div>

    </div>
  )
}

export default ProjectCard