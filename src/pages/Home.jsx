import React from 'react'
import Hero from '../components/hero'
import Services from './Services'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'



const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <div id='services'>

        <Services />
      </div>

      <div id='projects'>

        <Projects />
      </div>

      <div id='about'>

        <About />
      </div>

      <div id='contact'>

        <Contact />
      </div>

    </div>
  )
}

export default Home