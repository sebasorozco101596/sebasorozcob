import React from 'react'
import './buttons.css'
import RED from '../../assets/red.png'
import FIGURE from '../../assets/figure.png'
import { Link, BrowserRouter } from 'react-router-dom'

function Buttons() {

  return (
    <BrowserRouter>
      <div className='container__buttons'>
        <Link to="#programmer" className='button__container'>
          <div className='button'>
            <img src={RED} alt="me" />
            <p>Programmer</p>
          </div>

        </Link>

        <Link to="#photography" className='button__container'>
          <div className='button'>
            <img src={FIGURE} alt="me" />
            <p>Photography</p>
          </div>
        </Link>
      </div>
    </BrowserRouter>

  )
}

export default Buttons