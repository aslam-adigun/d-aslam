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
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe nostrum vel? Quaerat architecto at modi rem repudiandae voluptatibus quas, assumenda, enim facilis earum hic ducimus! Sed facere id reprehenderit.'
  },
  {
    avatar: AVRT2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe nostrum vel? Quaerat architecto at modi rem repudiandae voluptatibus quas, assumenda, enim facilis earum hic ducimus! Sed facere id reprehenderit.'
  },
  {
    avatar: AVRT3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe nostrum vel? Quaerat architecto at modi rem repudiandae voluptatibus quas, assumenda, enim facilis earum hic ducimus! Sed facere id reprehenderit.'
  },
  {
    avatar: AVRT4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe nostrum vel? Quaerat architecto at modi rem repudiandae voluptatibus quas, assumenda, enim facilis earum hic ducimus! Sed facere id reprehenderit.'
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