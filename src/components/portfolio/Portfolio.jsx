import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/hajorah.jpg'
import IMG2 from '../../assets/healthsync.jpg'
import IMG3 from '../../assets/bytemarket.jpg'
import IMG4 from '../../assets/reen bank.jpg'
import IMG5 from '../../assets/onemoni.jpg'
import IMG6 from '../../assets/famtree.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Hajorah',
    type: 'UI/UX Design',
    figma: 'https://www.figma.com/file/umOuoevT6Maa0kRyjnLTBt/hajorah?type=design&mode=design&t=k7nZIYlyyChXRjO6-1',
    demo: 'https://www.figma.com/@d_aslam'
  },
  {
    id: 2,
    image: IMG2,
    title: 'HealthSync',
    type: 'UI/UX Design',
    figma: 'https://www.figma.com/file/bmBLTfdIhwsjkHr7sj7CnD/HealthSync?type=design&mode=design&t=k7nZIYlyyChXRjO6-1',
    demo: 'https://www.figma.com/proto/bmBLTfdIhwsjkHr7sj7CnD/HealthSync?type=design&node-id=0-1&t=k7nZIYlyyChXRjO6-0&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2&prev-org-id=external-teams&show-proto-sidebar=1'
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
    figma: 'https://www.figma.com/file/q98sQqPF68fOLgbJZ9pnzy/ReenBank-WebApp?type=design&node-id=602%3A11351&mode=design&t=k7nZIYlyyChXRjO6-1',
    demo: 'https://www.figma.com/proto/q98sQqPF68fOLgbJZ9pnzy/ReenBank-WebApp?type=design&node-id=602-11351&t=k7nZIYlyyChXRjO6-0&scaling=contain&page-id=602%3A11351&starting-point-node-id=717%3A4274&prev-org-id=external-teams'
  },
  {
    id: 5,
    image: IMG5,
    title: 'OneMoni',
    type: 'UI/UX Design',
    figma: 'https://www.figma.com/file/goDGusBdZdeM7Hgb689xVr/oneMoni?type=design&mode=design&t=toyKchOIowquhtwS-1',
    demo: 'https://www.figma.com/proto/goDGusBdZdeM7Hgb689xVr/oneMoni?type=design&node-id=2224-2442&t=k7nZIYlyyChXRjO6-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2224%3A2442&prev-org-id=external-teams&show-proto-sidebar=1'
  },
  {
    id: 6,
    image: IMG6,
    title: 'FamTree',
    type: 'UI/UX Design',
    figma: 'https://www.figma.com/file/36da14FMGjSHLod60nqWsF/Family-Tree?type=design&mode=design&t=fNrVi0ONcCCF5Oet-1',
    demo: 'https://www.figma.com/proto/36da14FMGjSHLod60nqWsF/Family-Tree?type=design&node-id=32-20&t=k7nZIYlyyChXRjO6-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=32%3A20&prev-org-id=external-teams&show-proto-sidebar=1'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, type, figma, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h5>{type}</h5>
          <div className="portfolio__item-cta">
          <a href={figma} className='btn' target='_blank' rel="noreferrer">Figma</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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