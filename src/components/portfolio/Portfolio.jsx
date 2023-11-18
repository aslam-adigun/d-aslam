import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hajorah.jpg'
import IMG2 from '../../assets/reen edge.png'
import IMG3 from '../../assets/healthsync.jpg'
import IMG4 from '../../assets/bytemarket.jpg'
import IMG5 from '../../assets/reen bank.jpg'
import IMG6 from '../../assets/royal services.jpg'
import IMG7 from '../../assets/techstars.png'
import IMG8 from '../../assets/onemoni.jpg'
import IMG9 from '../../assets/famtree.jpg'
import { MdArrowOutward } from "react-icons/md";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hajorah',
    type: 'Logo Design, UI/UX Design',
    figma: '',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'ReenEdge Solutions Limited',
    type: 'Logo Design, Web Design',
    figma: '',
    demo: 'https://www.behance.net/gallery/182531057/ReenEdge-Solutions-Ltd-Brand-Visual-Design'
  },
  {
    id: 3,
    image: IMG3,
    title: 'HealthSync',
    type: 'Logo Design, UI/UX Design',
    figma: '',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Bytemarket',
    type: 'Logo Design, UI/UX Design',
    figma: '',
    demo: 'https://www.behance.net/gallery/177960481/ByteMarket-UI-Presentation'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Reen Bank',
    type: 'Logo Design, UI/UX Design',
    figma: '',
    demo: 'https://www.behance.net/gallery/177853925/ReenBank-UI-Presentation'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Royal Services',
    type: 'Logo Design, Visual Identity',
    figma: '',
    demo: 'https://www.behance.net/gallery/174024117/Royal-Services'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Techstars',
    type: 'Logo Design, Visual Identity',
    figma: '',
    demo: 'https://www.behance.net/gallery/169655981/TechStars-Brand-Identity-Case-Study'
  },
  {
    id: 8,
    image: IMG8,
    title: 'OneMoni',
    type: 'Logo Design, UI/UX Design',
    figma: '',
    demo: ''
  },
  {
    id: 9,
    image: IMG9,
    title: 'FamTree',
    type: 'UI/UX Design',
    figma: '',
    demo: 'https://www.behance.net/gallery/164904323/FamTree-(Family-Tree-App)'
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