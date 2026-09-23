import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaServer, FaDatabase, FaMobileAlt, FaCloud, FaTools } from 'react-icons/fa'

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks.",
      icon: FaReact,
      technologies: ["React.jsx", "HTML", "CSS", "Angular", "JavaScript"]
    },

    {
      title: "Backend Development",
      description: "Building scalable server-side applications and RESTful APIs.",
      icon: FaServer,
      technologies: ["Node.js", "Express", "Laravel"]
    },

    {
      title: "Database Management",
      description: "Designing and optimizing databases for performance and scalability.",
      icon: FaDatabase,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },

    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with modern tools.",
      icon: FaMobileAlt,
      technologies: ["React Native", "Flutter", "Ionic", "User"]
    },

    {
      title: "Cloud and DevOps",
      description: "Deploying and managing applications in cloud environments.",
      icon: FaCloud,
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },

    {
      title: "Tools and Technologies",
      description: "Essential tools and technologies I use in my development workflow.",
      icon: FaTools,
      technologies: ["Git and GitHub", "Leetcode", "Notion", "Figma", "Webpack"]
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      viewport={{ once: true }}
      id="skills"
      className="min-h-screen py-20 bg-slate-900"
    >

      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          My
          <span className="text-purple-500"> Skills</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {skillsData.map((data, index) => {

            const Icon = data.icon

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className=" bg-slate-800 rounded-2xl p-6 cursor-pointer border border-slate-700 hover:border-purple-500 transition-colors duration-300">

                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">

                  <Icon className="text-purple-500 text-5xl flex-shrink-0" />

                  <h3 className="text-xl font-semibold text-white">
                    {data.title}
                  </h3>

                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-5">
                  {data.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">

                  {data.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className=" px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}

                </div>

              </motion.div>
            )
          })}

        </div>

      </div>

    </motion.section>
  )
}

export default Skills