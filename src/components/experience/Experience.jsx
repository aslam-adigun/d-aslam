import React from 'react'
import './experience.css'
import {BsCheckLg} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Where I've worked</h5>
      <h2>Experience</h2>

      <div className="container experiences__container">
        <article className="experience">
          <div className="experience__head">
            <h3>Design Lead</h3>
            <p>Techstars Community</p>
            <p className='date'>Mar 2023 till date</p>
          </div>

          <ul className="experience__list">
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I created Techstars Community Brand Visual Identity.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>Currently designing on Bookslab, an app being developed by the community.</p>
            </li>
          </ul>
        </article>
        {/* END OF DESIGN LEAD */}
        <article className="experience">
          <div className="experience__head">
            <h3>IT Support Specialist</h3>
            <p>Emporg Limited</p>
            <p className='date'>Feb 2021 till date</p>
          </div>

          <ul className="experience__list">
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I provide personalized technical support to users.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I troubleshoot hardware and software issues.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I assist with installation and configuration, and maintaining documentation.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I also contribute to network and system maintenance.</p>
            </li>
          </ul>
        </article>
        {/* END OF IT SUPPORT */}
        <article className="experience">
          <div className="experience__head">
            <h3>Graphics Designer</h3>
            <p>Alvoice Solutions</p>
            <p className='date'>May 2018 till date</p>
          </div>

          <ul className="experience__list">
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I created captivating visual concepts that effectively drove company sales.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I developed the overall layout and production design for diverse applications.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I adjusted layouts based on valuable feedback from clients and team members.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I presented designs to clients for approval or modification.</p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHICS DESIGN */}
        <article className="experience">
          <div className="experience__head">
            <h3>Graphics Designer</h3>
            <p>WeTheEcho</p>
            <p className='date'>Mar 2021 - May 2022</p>
          </div>

          <ul className="experience__list">
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I created captivating visual concepts that effectively drove company sales.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I adjusted layouts based on valuable feedback from clients and team members.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I presented designs to clients for approval or modification.</p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHICS DESIGN */}
        <article className="experience">
          <div className="experience__head">
            <h3>Graphics Designer</h3>
            <p>Sorai Ventures</p>
            <p className='date'>January 2018 - Sep 2018</p>
          </div>

          <ul className="experience__list">
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I developed captivating visuals for diverse applications.</p>
            </li>
            <li>
              <BsCheckLg className="experience__list-icon" />
              <p>I determined the optimal medium, adjusted layouts based on feedback.</p>
            </li>
          </ul>
        </article>
        {/* END OF GRAPHICS DESIGN */}
      </div>
    </section>
  )
}

export default Experience