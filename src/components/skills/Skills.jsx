import React from 'react'
import './skills.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <section id='skills'>
            <h5>Tools I use &</h5>
            <h2>My Skills</h2>

            <div className="container skills__container">
                <div className="skills__design">
                    <h3>Design</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Figma</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Adobe Photoshop</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>CorelDRAW</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Adobe After Effects</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Blender</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Adobe Premiere Pro</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}
                <div className="skills__frontend">
                    <h3>Frontend</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsFillPatchCheckFill className='skills__details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills