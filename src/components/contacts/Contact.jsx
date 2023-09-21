import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>a.adepoju23@gmail.com</h5>
            <a href="mailto:a.adepoju23@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerFill />
            <h4>Messenger</h4>
            <h5>Aslam Adigun Adepoju</h5>
            <a href="https://m.me/adigun.adepoju.9" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill />
            <h4>Whatsapp</h4>
            <h5>+234 818 404 4217</h5>
            <a href="https://wa.me/2348184044217" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
      </div>
    </section>
  )
}

export default Contact