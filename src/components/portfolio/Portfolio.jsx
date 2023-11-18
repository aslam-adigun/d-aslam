import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hajorah.jpg'
import IMG2 from '../../assets/healthsync.jpg'
import IMG3 from '../../assets/bytemarket.jpg'
import IMG4 from '../../assets/reen bank.jpg'
import IMG5 from '../../assets/onemoni.jpg'
import IMG6 from '../../assets/famtree.jpg'
import { MdArrowOutward } from "react-icons/md";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hajorah',
    type: 'UI/UX Design',
    figma: '',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'HealthSync',
    type: 'UI/UX Design',
    figma: '',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Bytemarket',
    type: 'UI/UX Design',
    figma: '',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Reen Bank',
    type: 'UI/UX Design',
    figma: '',
    demo: ''
  },
  {
    id: 5,
    image: IMG5,
    title: 'OneMoni',
    type: 'UI/UX Design',
    figma: '',
    demo: ''
  },
  {
    id: 6,
    image: IMG6,
    title: 'FamTree',
    type: 'UI/UX Design',
    figma: '',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, type, figma, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <div className='portfolio__item-cta'>
                  <div className='portfolio__details'>
                    <h3>{title}</h3>
                    <h5>{type}</h5>
                  </div>
                  {/* <div className="portfolio__item-cta"> */}
                  {/* <a href={figma} className='btn' target='_blank' rel="noreferrer">Figma</a> */}
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer"><MdArrowOutward /></a>
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