import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Create user-centered interfaces for seamless experiences.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Turn ideas into intuitive, engaging designs.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Elevate usability through user research insights.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Blend aesthetics and function for memorable journeys.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Craft easy-to-follow navigation for users.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Transform concepts into visually appealing prototypes.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Elevate your brand with captivating visuals.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Communicate effectively through striking designs.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Add creativity to marketing materials.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Enhance social media presence with visuals.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Create stunning illustrations and graphics.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Tailor-made designs that captivate.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Designs for various platforms and applications.</p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHICS DESIGN */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Craft responsive, user-friendly websites.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Optimize for fast, smooth performance.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Bring designs to life with beautiful code.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Ensure cross-browser compatibility.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Add engaging, interactive features.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Stay on the cutting edge of web trends.</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services