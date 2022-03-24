import React from 'react'
import './footer.css'
import { FiInstagram, FiTwitter } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sebasorozcob.com</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/juan-sebastian-orozco-buitrago-811458145/"><FaLinkedin /></a>
      <a href="https://www.instagram.com"><FiInstagram /></a>
      <a href="https://www.twitter.com"><FiTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Juan S Orozco Buitrago, All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer