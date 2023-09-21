import React from 'react'
import './about.css'
import ME from '../../assets/aslam-about.jpg'
import { FaAward } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { BsFillFolderFill } from 'react-icons/bs'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <HiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>100+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <BsFillFolderFill className='about__icon' />
                            <h5>Projects</h5>
                            <small>100+ Completed</small>
                        </article>
                    </div>

                    <p>
                        As a designer with a passion for creating visually stunning and user-friendly experiences,
                        I have recently begun learning front-end development to expand my skillset and bring my designs to life.
                        With a strong foundation in design principles and a desire to constantly improve and learn,
                        I am excited to combine my creative and technical abilities to create exceptional websites and applications.
                    </p>

                    <a href="#contact" className='btn'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About