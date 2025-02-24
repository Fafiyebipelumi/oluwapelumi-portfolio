import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home;