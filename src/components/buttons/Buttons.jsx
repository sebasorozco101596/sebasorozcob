import React from 'react'
import './buttons.css'
import RED from '../../assets/red.png'
import FIGURE from '../../assets/figure.png'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {


  return (
    <div className='container__buttons'>
      <a href="/programmer" className='button__container'>
        <div className='button'>
          <img src={RED} alt="me" />
          <p>Programmer</p>
        </div>
      </a>

      <a href="/photography" className='button__container'>
        <div className='button'>
          <img src={FIGURE} alt="me" />
          <p>Photography</p>
        </div>
      </a>
    </div>
  )
}

export default Buttons