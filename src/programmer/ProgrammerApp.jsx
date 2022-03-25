import React from 'react'
import Header from './Programmer/components/header/Header'
import Nav from './Programmer/components/nav/Nav'
import About from './Programmer/components/about/About'
import Experience from './Programmer/components/experience/Experience'
import Services from './Programmer/components/services/Services'
import Portfolio from './Programmer/components/portfolio/Portfolio'
import Testimonials from './Programmer/components/testimonials/Testimonials'
import Contact from './Programmer/components/contact/Contact'
import Footer from './Programmer/components/footer/Footer'

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


