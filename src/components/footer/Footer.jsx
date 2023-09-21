/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import Logo from "../../assets/D. ASLAM.png";
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={Logo} alt="Footer Logo" />
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/adigun.adepoju.9" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
        <a href="https://www.instagram.com/dh.aslam/" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
        <a href="https://twitter.com/AslamAdigun" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Aslam Dhikrullahi. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
