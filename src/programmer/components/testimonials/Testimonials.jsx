import React from 'react'
import './testimonials.css'
import AVTR2 from '../../../assets/avatar2.jpg'
import AVTR3 from '../../../assets/avatar3.jpg'

//import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR3,
    name: 'Miguel Capellan',
    review: "Excellent programmer, solved all the needs of my business, in addition to the impeccable communication and understanding of the needs."
  },
  {
    avatar: AVTR2,
    name: 'Wilmer Guevara',
    review: "Awesome customer service, I would recommend again and again, more reviews to come. Skilled guy!."
  },
  {
    avatar: AVTR3,
    name: 'Zubairbakay',
    review: "Great product he delievered me."
  },
  {
    avatar: AVTR2,
    name: 'dionisiomendoza',
    review: "Excellent understanding of algorithms, and the use in different applications"
  },
  {
    avatar: AVTR3,
    name: 'nick2693',
    review: "Excellent understanding of the problem, he solved my homework in an excellent android application to teach children a bit of sign language initially using some illustrative images and then doing tests to improve what they learned"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>

                <h5 className='client__name'>{ name }</h5>
                <small className='client__review'>{ review }</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials