import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.scss';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3vgcddq',
        'template_1fz1krs',
        form.current,
        'wsZ5xLLUQEivO3Bwm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className='email-box'>
          <form ref={form} onSubmit={sendEmail}>
            <h1>Get in touch</h1>
            <label className='label-name label-text'></label>
            <input type="text" name="user_name" className='input' placeholder='name*' required/>
            <label className='label-email label-text'></label>
            <input type="email" name="user_email" className='input' placeholder='email*' required/>
            <label className='label-message label-text'></label>
            <textarea name="message" className='textarea' placeholder='message*' required/>
            <input type="submit" value="Send" className='send-btn'/>
          </form>
        </div>

        <div className="profile-box"></div>
      </div>
    </div>
  );
};

export default Contact;
