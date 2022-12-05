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
        <p className="contact-title">Contact</p>
        {/* email-box */}
        <div className="email-box">
          <form ref={form} onSubmit={sendEmail}>
            {/* <p className="email-title">Get in touch</p> */}
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
          {/* <p className='profile-title'>Profile</p> */}
          <div className="profile-contact">
            {/* <p className="profile-contact-title">Contact</p> */}
            <div className="profile-items">
              <h2>
                email
                <a href="mailto:hyeun9991@gmail.com">hyeun9991@gmail.com</a>
              </h2>
            </div>
            <div className="profile-items">
              <h2>
                phone call
                <a href="sms:010-7527-5792">+82 10-7527-5792</a>
              </h2>
            </div>
          </div>
          <div className="profile-social">
            {/* <p className="profile-social-title">Social</p> */}
            <div className="profile-items">
              <h2>
                github
                <a href="https://github.com/hyeun9991" target="_blank">
                  github.com/hyeun9991
                </a>
              </h2>
            </div>
            <div className="profile-items">
              <h2>
                blog
                <a href="https://velog.io/@hyeun9991" target="_blank">
                  velog.io/@hyeun9991
                </a>
              </h2>
            </div>
          </div>
        </div>
        {/* /profile-box */}
      </div>
    </div>
  );
};

export default ContactContainer;
