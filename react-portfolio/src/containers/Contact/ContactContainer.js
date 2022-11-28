import React, { useRef } from 'react';
import ToTopButton from '../../components/ToTopButton/ToTopButton';
import emailjs from '@emailjs/browser';
import './ContactContainer.scss';

const ContactContainer = () => {
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
      <ToTopButton />
      <div className="contact-container">
        {/* email-box */}
        <div className="email-box">
          <form ref={form} onSubmit={sendEmail}>
            <h1>Get in touch</h1>
            <div className="name-input input-box">
              <label></label>
              <input
                type="text"
                autoCapitalize="off"
                autoCorrect="off"
                name="user_name"
                className="input"
                placeholder="이름"
                required
              />
            </div>
            <div className="email-input input-box">
              <label></label>
              <input
                type="email"
                name="user_email"
                className="input email-input"
                placeholder="이메일"
                required
              />
            </div>
            <div className="msg-textarea textarea-box">
              <label></label>
              <textarea
                name="message"
                className="textarea"
                placeholder="메세지를 입력해주세요"
                required
              />
            </div>
            <input type="submit" value="Send message" className="send-btn" />
          </form>
        </div>
        {/* /email-box */}

        {/* profile-box */}
        <div className="profile-box">
          <div className="profile-contact">
            <h1>contact</h1>
            <div className="profile-items">
              <h2>email</h2>
              <a href="mailto:hyeun9991@gmail.com">hyeun9991@gmail.com</a>
            </div>
            <div className="profile-items">
              <h2>phone call</h2>
              <a href="sms:010-7527-5792">+82 10-7527-5792</a>
            </div>
          </div>
          <div className="profile-social">
            <h1>social</h1>
            <div className="profile-items">
              <a href="https://github.com/Hyeun9991" target="_blank">
                <h2>github</h2>
              </a>
            </div>
            <div className="profile-items">
              <a href="https://velog.io/@hyeun9991" target="_blank">
                <h2>blog</h2>
              </a>
            </div>
          </div>
        </div>
        {/* /profile-box */}
      </div>
    </div>
  );
};

export default ContactContainer;
