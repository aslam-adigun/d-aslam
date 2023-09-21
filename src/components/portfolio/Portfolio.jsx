import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project 1',
    figma: 'https://www.figma.com/@d_aslam',
    demo: 'https://www.figma.com/@d_aslam'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    figma: 'https://www.figma.com/@d_aslam',
    demo: 'https://www.figma.com/@d_aslam'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    figma: 'https://www.figma.com/@d_aslam',
    demo: 'https://www.figma.com/@d_aslam'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project 4',
    figma: 'https://www.figma.com/@d_aslam',
    demo: 'https://www.figma.com/@d_aslam'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project 5',
    figma: 'https://www.figma.com/@d_aslam',
    demo: 'https://www.figma.com/@d_aslam'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Project 6',
    figma: 'https://www.figma.com/@d_aslam',
    demo: 'https://www.figma.com/@d_aslam'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, figma, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={figma} className='btn' target='_blank'>Figma</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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