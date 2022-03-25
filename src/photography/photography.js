import React from 'react'
import Header from '../programmer/components/header/Header'
import Nav from '../programmer/components/nav/Nav'
import About from '../programmer/components/about/About'
import Experience from '../programmer/components/experience/Experience'
import Services from '../programmer/components/services/Services'
import Portfolio from '../programmer/components/portfolio/Portfolio'
import Testimonials from '../programmer/components/testimonials/Testimonials'
import Contact from '../programmer/components/contact/Contact'
import Footer from '../programmer/components/footer/Footer'

const ProgrammerApp = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default ProgrammerApp