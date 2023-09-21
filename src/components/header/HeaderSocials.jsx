import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaDribbble } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/d-aslam" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.behance.net/dhikrulaslam" target="_blank" rel="noreferrer"><FaBehance /></a>
            <a href="https://www.github.com/aslam-adigun" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.dribbble.com/DAslam" target="_blank" rel="noreferrer"><FaDribbble /></a>
            <a href="https://www.figma.com/@d_aslam" target="_blank" rel="noreferrer"><FiFigma /></a>
        </div>
    )
}

export default HeaderSocials