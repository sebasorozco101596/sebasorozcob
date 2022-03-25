import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        {/* Android Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Android Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managment of database.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Create beautiful interfaces.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Connect the app using RESTful Web Services.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Use of good practices of UI/UX.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Use of good practices of clean code.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Create responsive interfaces using jetpack compose or xml.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Use of the best architecture for each project.</p> 
            </li>
          </ul>
        </article>

        {/* iOS Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>iOS Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managment of database using Realm or core data</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Create apps using SwiftUI or UIKit</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Good integration with RESTful Web Services.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Use of good practices of clean code.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus in UI/UX.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Use of the best architecture for each project.</p> 
            </li>
          </ul>
        </article>

        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create Responsive Web Apps.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus in the design and details of the web page.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus in keep the atention of the user in the important things.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Use the last technologies for development.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Create Web Apps with scalability.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Create the Web Page using the principles of MERN.</p> 
            </li>
          </ul>
        </article>

        {/* UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus in the desing and the details for the user.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Keep the user focused in the important things.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Make everything easier as posible for the understanding of the final user.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus in the use cases.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Give a responsive design to the final user.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus on the revelant information that the end user needs to see.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Handling of color theory.</p> 
            </li>
          </ul>
        </article>

        {/* CONTENT CREATION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create Logos.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Create Designs according to the needs.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Handling of color theory.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Use of innovative designs.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus in the details.</p> 
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Use the latest Technologies for create designs.</p> 
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service