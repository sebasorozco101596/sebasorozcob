import React from 'react'
import './about.css'
import ME from '../../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>4+ WorldWide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p> I am a curious person to learn new things every day and try to be the best
            at what I do, I am passionate about what I like. I love working with versatile
            people and being versatile in a work team, my work is based on communication and
            understanding of the problem to provide solutions according to what is expected.
            I try to take my career one step at a time while enjoying the process of the path of knowledge.
            I am passionate about native mobile development and web development and I want to take my
            development to a large scale.
            I have worked with Fiverr clients in different countries like India, England,
            Dominican Republic and Colombia. making projects for native Android applications
            and web pages
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About