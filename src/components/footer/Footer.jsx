import React from 'react'
import './footer.css'
import { FiInstagram} from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sebasorozcob.com</a>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/juan-sebastian-orozco-buitrago-811458145/" target= "_blank"><FaLinkedin /></a>
      <a href="https://www.instagram.com/sebasorozco_ph" target= "_blank"><FiInstagram /></a>
      <a href="https://github.com/sebasorozco101596" target= "_blank"><BsGithub /></a>
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