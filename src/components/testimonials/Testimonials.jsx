import React from 'react'
import './testimonials.css'
import AVRT1 from '../../assets/avatar1.jpg'
import AVRT2 from '../../assets/avatar2.jpg'
import AVRT3 from '../../assets/avatar3.jpg'
import AVRT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVRT1,
    name: 'Maureen Oguche',
    review: "Aslam's exceptional expertise in our branding project resulted in outstanding outcomes. His creativity, professionalism, and deep understanding of our brand surpassed expectations. From embracing our vision to transparent communication, Aslam's transformative touch earned rave reviews. I highly recommend Aslam for his remarkable work."
  },
  {
    avatar: AVRT2,
    name: 'Michael Anderson',
    review: "Aslam's creativity and precision took our brand to new heights. From concept to execution, his professionalism and innovation were outstanding. Our brand now stands out, and we couldn't be happier."
  },
  {
    avatar: AVRT3,
    name: 'Brian Mitchell',
    review: "Partnering with Aslam for a product launch was a game-changer. His remarkable ability to translate our product's identity into captivating visuals exceeded our expectations. Aslam is the designer who truly understands your vision."
  },
  {
    avatar: AVRT4,
    name: 'Fateemah Alli',
    review: "Collaborating with Aslam on a crucial branding project was a pleasure. His design finesse and dedication to capturing our brand's identity were commendable. The final designs exceeded expectations, leaving a lasting impression."
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reiew from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Client Avatar"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials