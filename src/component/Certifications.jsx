import React from "react"
import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa"

// Certificate Images
import Computer from "../assets/Computer.jpg"
import IIT from "../assets/IIT.jpeg"
import MAC from "../assets/MAC.jpeg"

const Certifications = () => {

  const certifications = [
    {
      title: "Full Stack Web Development",
      company: "CodeClause",
      duration: "2025",
      description:
        "Completed a full stack web development internship covering frontend, backend, databases and API development.",
      image: Computer,
      link: "#"
    },

    {
      title: "Data Analysis with Python",
      company: "Coursera",
      duration: "2025",
      description:
        "Learned data cleaning, analysis and visualization using Python, Pandas, NumPy, Matplotlib and Seaborn.",
      image: IIT,
      link: "#"
    },

    {
      title: "Java Programming & DSA",
      company: "Online Certification",
      duration: "2024",
      description:
        "Completed training in Java programming, data structures, algorithms and problem-solving techniques.",
      image: MAC,
      link: "#"
    }
  ]


  return (

    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen py-20 bg-slate-900"
    >

      <div className="container mx-auto px-6">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          My
          <span className="text-purple-500"> Certifications</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Certifications and achievements that showcase my skills
        </p>


        {/* Certification Cards */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          max-w-6xl
          mx-auto
        ">

          {certifications.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="
                bg-slate-800
                rounded-2xl
                overflow-hidden
                cursor-pointer
                transition-all
                duration-300
              "
            >

              {/* Certificate Image */}

              <div className="w-full h-52 bg-slate-700 overflow-hidden">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition
                    duration-500
                  "
                />

              </div>


              {/* Card Content */}

              <div className="p-6">

                {/* Title */}

                <h3 className="
                  text-xl
                  font-bold
                  text-white
                  mb-2
                ">
                  {certificate.title}
                </h3>


                {/* Company + Duration */}

                <div className="
                  flex
                  justify-between
                  items-center
                  gap-3
                  mb-4
                ">

                  <p className="
                    text-purple-400
                    font-semibold
                    text-sm
                  ">
                    {certificate.company}
                  </p>

                  <span className="
                    px-3
                    py-1
                    rounded-full
                    bg-purple-900/60
                    text-purple-400
                    text-xs
                    font-semibold
                    whitespace-nowrap
                  ">
                    {certificate.duration}
                  </span>

                </div>


                {/* Description */}

                <p className="
                  text-gray-400
                  text-sm
                  leading-6
                  mb-6
                ">
                  {certificate.description}
                </p>


                {/* View Certificate */}

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    px-4
                    py-2.5
                    bg-purple-600
                    text-white
                    rounded-lg
                    font-medium
                    hover:bg-purple-700
                    transition
                    duration-300
                  "
                >
                  View Certificate
                  <FaExternalLinkAlt size={13} />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>

  )
}

export default Certifications