import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About';
import Skills from '../component/Skills';
import Project from '../component/Project';
import Work from '../component/Work';
import Certifications from '../component/Certifications';
import Contect from '../component/Contect';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Work />
      <Certifications />
      <Contect />

    </div>
  )
}

export default Home;
