import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerFill} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5jt05tw', 'template_8e9nm1m', form.current, 'Rdaloah_APMkLT8w0')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>a.adepoju23@gmail.com</h5>
            <a href="mailto:a.adepoju23@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerFill className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Aslam Adigun Adepoju</h5>
            <a href="https://m.me/adigun.adepoju.9" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+234 818 404 4217</h5>
            <a href="https://wa.me/2348184044217" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact