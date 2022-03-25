import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, secActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={ () => secActiveNav('#')} className= {activeNav === '#' ? 'active' : ''} > < AiOutlineHome/> </a>
      <a href="#about" onClick={ () => secActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}> < AiOutlineUser/> </a>
      <a href="#experience" onClick={ () => secActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}> < BiBook/> </a>
      <a href="#services" onClick={ () => secActiveNav('#services')} className= {activeNav === '#services' ? 'active' : ''}> < RiServiceLine/> </a>
      <a href="#contact" onClick={ () => secActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}> < BiMessageDetail/> </a>
    </nav>
  )
}

export default Nav