import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaDribbble } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/d-aslam" target="_blank"><FaLinkedinIn /></a>
            <a href="https://www.behance.net/dhikrulaslam" target="_blank"><FaBehance /></a>
            <a href="https://www.github.com/aslam-adigun" target="_blank"><BsGithub /></a>
            <a href="https://www.dribbble.com/DAslam" target="_blank"><FaDribbble /></a>
            <a href="https://www.figma.com/@d_aslam" target="_blank"><FiFigma /></a>
        </div>
    )
}

export default HeaderSocials