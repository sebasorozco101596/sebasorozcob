import React, { useRef, useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'
import Notification from '../notification/Notification'

const Contact = () => {

  const form = useRef();
  const [notify, setNotify] = useState(
    {
      isOpen: false,
      message: '',
      type: ''
    }
  );

  const { REACT_APP_EMAILJS_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(REACT_APP_EMAILJS_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_USER_ID)
      .then((result) => {
        setNotify({
          isOpen: true,
          message: 'Message Sended!! - I will be in contact with you as soon as posible!',
          type: 'success'
        })
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setNotify({
          isOpen: true,
          message: 'Error sending the email, do not forget to try again!',
          type: 'error'
        })
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        {/* CONTACT OPTIONS */}
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sebasorozcob@gmail.com</h5>
            <a href="mailto:sebasorozcob@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>Juan Sebastian Orozco Buitrago</h5>
            <a href="https://www.linkedin.com/in/juan-sebastian-orozco-buitrago-811458145/" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+1 (973) 462-0735</h5>
            <a href="https://api.whatsapp.com/send?phone=+19734620735" target="_blank">Send a message</a>
          </article>
        </div>

        {/* FORM SEND EMAIL */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <Notification
            notify={notify}
            setNotify={setNotify}
          />
        </form>

      </div>
    </section>
  )
}

export default Contact