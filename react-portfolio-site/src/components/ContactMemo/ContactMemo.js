import React from 'react';
import './ContactMemo.scss';

const ContactMemo = () => {
  return (
    <div className="contact-memo">
      <h1>Contact me</h1>
      <div>
        <p>Email</p>
        <a href='mailto: hyeun9991@gmail.com'>hyeun9991@gmail.com</a>
      </div>
      <div>
        <p>Blog</p>
        <a href="https://github.com/Hyeun9991" target="_blank">
          github.com/Hyeun9991
        </a>
      </div>
      <div>
        <p>Github</p>
        <a href='https://velog.io/@hyeun9991' target="_blank">velog.io/@hyeun9991</a>
      </div>
    </div>
  );
};

export default ContactMemo;
