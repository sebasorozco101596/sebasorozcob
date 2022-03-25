import React from 'react'
import './header.css'
import ME from '../../assets/me.png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <div className="container__header">

          <h5>Hello I'm</h5>
          <h1>Juan S Orozco Buitrago</h1>
          <h5 className="text-light">Developer and Photographer</h5>

        </div>

      </div>
    </header>
  )
}

export default Header