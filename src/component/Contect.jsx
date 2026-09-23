import React from "react"
import { motion } from "framer-motion"


import {
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaCode
} from "react-icons/fa"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Contact"
      className="min-h-screen py-20 bg-slate-900"
    >

      {/* Heading */}
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Get In
          <span className="text-purple-500"> Touch</span>
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>


        {/* Contact Content */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">


          {/* ================= LEFT : FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >

            {/* Name */}
            <div className="mb-6">

              <label className="block text-gray-300 mb-2 font-medium">
                Your Name
              </label>

              <input
                type="text"
                className=" w-full px-4 py-3 bg-[#2f2f2f] rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-500 transition" />

            </div>


            {/* Email */}
            <div className="mb-6">

              <label className="block text-gray-300 mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                className=" w-full px-4 py-3 bg-[#2f2f2f] rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-500 transition" />

            </div>


            {/* Message */}
            <div className="mb-6">

              <label className="block text-gray-300 mb-2 font-medium">
                Your Message
              </label>

              <textarea
                rows="5"
                className=" w-full px-4 py-3 bg-[#2f2f2f] rounded-lg text-white outline-none resize-none focus:ring-2 focus:ring-purple-500 transition"></textarea>

            </div>


            {/* Send Button */}
            <button
              className=" w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300">
              Send Message
            </button>

          </motion.div>



          {/*RIGHT : CONTACT INFO  */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="space-y-8"
          >

            {/* Location */}
            <div className="flex items-start gap-4">

              <FaMapMarkerAlt className="text-white text-2xl mt-1" />

              <div>
                <h3 className="text-lg font-bold text-white">
                  Location
                </h3>

                <p className="text-gray-400 mt-2">
                  Triveniganj Supaul, Bihar, India, 852139
                </p>
              </div>

            </div>


            {/* Email */}
            <div className="flex items-start gap-4">

              <FaEnvelope className="text-white text-2xl mt-1" />

              <div>
                <h3 className="text-lg font-bold text-white">
                  Email
                </h3>

                <p className="text-gray-400 mt-2">
                  thebhubannayak@gmail.com
                </p>
              </div>

            </div>


            {/* Phone */}
            <div className="flex items-start gap-4">

              <FaPhone className="text-white text-2xl mt-1" />

              <div>
                <h3 className="text-lg font-bold text-white">
                  Phone
                </h3>

                <p className="text-gray-400 mt-2">
                  +91 90655 69292
                  <br />
                  +91 77400 74155
                </p>
              </div>

            </div>


            {/*  FOLLOW ME */}

            <div className="pt-4">

              <h3 className="text-lg font-bold text-white mb-5">
                Follow Me
              </h3>


              <div className="flex flex-wrap gap-4">

                {/* LinkedIn */}
                <motion.a
                  whileHover={{ y: -5, scale: 1.05 }}
                  href="https://linkedin.com/in/bhubaneswar-kumar-217b9b2aa"
                  className=" w-11 h-11 flex items-center justify-center rounded-full bg-[#2f2f2f] text-white hover:bg-purple-600 transition">
                  <FaLinkedin size={20} />
                </motion.a>


                {/* GitHub */}
                <motion.a
                  whileHover={{ y: -5, scale: 1.05 }}
                  href="https://github.com/Bhubaneshwar9065"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2f2f2f] text-white hover:bg-purple-600 transition">
                  <FaGithub size={20} />
                </motion.a>


                {/* LeetCode */}
                <motion.a
                  whileHover={{ y: -5, scale: 1.05 }}
                  href="https://github.com/Bhubaneshwar12"
                  className=" w-11 h-11 flex items-center justify-center rounded-full bg-[#2f2f2f] text-white hover:bg-purple-600 transition">
                  <FaCode size={20} />
                </motion.a>


                {/* YouTube */}
                <motion.a
                  whileHover={{ y: -5, scale: 1.05 }}
                  href="#"
                  className=" w-11 h-11 flex items-center justify-center rounded-full bg-[#2f2f2f] text-white hover:bg-purple-600 transition">
                  <FaYoutube size={20} />
                </motion.a>


                {/* Instagram */}
                <motion.a
                  whileHover={{ y: -5, scale: 1.05 }}
                  href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=mqbhih0"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2f2f2f] text-white hover:bg-purple-600 transition">
                  <FaInstagram size={20} />
                </motion.a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.div>
  )
}

export default Contact