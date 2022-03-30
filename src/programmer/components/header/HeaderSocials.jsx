import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a id='social' href='https://www.linkedin.com/in/juan-sebastian-orozco-buitrago-811458145/' target= "_blank"> <BsLinkedin/> </a>
        <a id='social' href='https://github.com/sebasorozco101596' target= "_blank"> <FaGithub/> </a>
        <a id='social' href='https:dribbble.com' target= "_blank"> <FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials