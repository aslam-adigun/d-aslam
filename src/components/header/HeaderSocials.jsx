import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { ImBehance2 } from 'react-icons/im'
import { FaGithubSquare } from 'react-icons/fa'
import { FaDribbbleSquare } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/d-aslam" target="_blank"><BsLinkedin /></a>
            <a href="https://www.behance.net/dhikrulaslam" target="_blank"><ImBehance2 /></a>
            <a href="https://www.github.com/aslam-adigun" target="_blank"><FaGithubSquare /></a>
            <a href="https://www.dribbble.com/DAslam" target="_blank"><FaDribbbleSquare /></a>
        </div>
    )
}

export default HeaderSocials