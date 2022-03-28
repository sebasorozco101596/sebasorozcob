import React from 'react'
import './portfolio.css'
import IMG1 from '../../../assets/africa-swiftui.jpg'
import IMG2 from '../../../assets/touch-down-swiftui.png'
import IMG3 from '../../../assets/devote-todo-swiftui.png'
import IMG4 from '../../../assets/honeymoon-swiftui.png'
import IMG5 from '../../../assets/fructus-swiftui.png'
import IMG6 from '../../../assets/restlov-android.png'

// DO NOT USE THE IMAGES IN PRODUCTION
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Africa: iOS App of Animals from Africa and their description',
    github: 'https://github.com/sebasorozco101596/Africa'
  },
  {
    id: 2,
    image: IMG2,
    title: 'TouchDown: iOS E-Commerce design app.',
    github: 'https://github.com/sebasorozco101596/Touchdown',
    demo: 'https://dribbble.com/shots/16580766-Orion-Ui-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Devote: iOS To Do app.',
    github: 'https://github.com/sebasorozco101596/Devote'
  },
  {
    id: 4,
    image: IMG4,
    title: 'HoneyMoon: iOS App to select travel places.',
    github: 'https://github.com/sebasorozco101596/Honeymoon-SwiftUI-3-iOS-15'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Fructus: iOS App that show the fruits and their properties',
    github: 'https://github.com/sebasorozco101596/Fructus',
    demo: 'https://dribbble.com/shots/16580766-Orion-Ui-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Restlov: Android App that show Restaurants, their menu and more.',
    github: 'https://github.com/sebasorozco101596/RestLov'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{ title }</h3>
                <div className="portfolio__item-cta">
                  <a href= { github } className='btn' target='__blank'>GitHub</a>
                  {/* <a href= { demo } className='btn btn-primary' target='__blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio