import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TbGps } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { SiBloglovin } from 'react-icons/si';
import { AiOutlineMessage } from 'react-icons/ai';
import './ContactContainer.scss';

const ContactContainer = () => {
  const form = useRef();
  const [toggleState, setToggleState] = useState(1);

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
          form.current.reset(); // 전송 버튼 누르면 form 초기화
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="contact">
      {/* tab-menu-container */}
      <div className="tab-menu-container">
        <h1 className="background-title">get in touch !</h1>
        <div className="contact-container">
          <div className='side-title-container'>
            <p className="content-side-title">
              제 사이트에 방문해주셔서 감사드립니다.
            </p>
            <p className="content-side-title">
              소중한 피드백은 제사이트 발전에 큰 도움이 됩니다.
            </p>
          </div>
          <div className="tabs">
            <div
              className={
                toggleState === 1 ? 'tab active-tab' : 'tab'
              }
              onClick={() => toggleTab(1)}
            >
              email
            </div>
            <div
              className={
                toggleState === 2 ? 'tab active-tab' : 'tab'
              }
              onClick={() => toggleTab(2)}
            >
              social
            </div>
          </div>
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? 'content active-content' : 'content'
              }
            >
              <form ref={form} onSubmit={sendEmail} className="email-form">
                <div className="label-input input-form">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="이름"
                  />
                </div>
                <div className="label-input input-form">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="이메일"
                  />
                </div>
                <div className="label-input">
                  <label htmlFor="message"></label>
                  <textarea name="message" id="message" placeholder="메세지" />
                </div>
                <div className="submit-btn">
                  <input type="submit" value="Send" className="send-btn" />
                </div>
              </form>
            </div>
            <div
              className={
                toggleState === 2 ? 'content active-content' : 'content'
              }
            >
              <ul className="social-content">
                <li>
                  <TbGps className='content-text'/>
                  <a
                    href="https://www.google.co.kr/maps/place/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C+%EB%82%A8%EB%8F%99%EA%B5%AC+%EB%85%BC%ED%98%84%EB%8F%99/data=!3m1!4b1!4m5!3m4!1s0x357b7a41e0fec225:0x692a71578d11b1e5!8m2!3d37.4075188!4d126.7056?hl=ko"
                    className="content-text"
                    target="_blank"
                  >
                    인천광역시 남동구
                  </a>
                </li>
                <li>
                  <MdAlternateEmail className='content-text'/>
                  <a
                    href="mailto: hyeun9991@gmail.com"
                    target="_blank"
                    className="content-text"
                  >
                    hyeun999@gmail.com
                  </a>
                </li>
                <li>
                  <AiOutlineMessage className='content-text' />
                  <a
                    href="sms: 010-7527-5792"
                    className="content-text"
                    target="_blank"
                  >
                    +82 10-7527-5792
                  </a>
                </li>
                <li>
                  <BsGithub className='content-text'/>
                  <a
                    href="https://github.com/Hyeun9991"
                    className="content-text"
                    target="_blank"
                  >
                    github.com/Hyeun9991
                  </a>
                </li>
                <li>
                  <SiBloglovin className='content-text'/>
                  <a
                    href="https://velog.io/@hyeun9991"
                    className="content-text"
                    target="_blank"
                  >
                    velog.io/@hyeun9991
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /tab-menu-container */}
      {/* page-footer-title */}
      <div className="page-footer-title">
        <p className="pf-title">contact</p>
      </div>
      {/* /page-footer-title */}
    </div>
  );
};

export default ContactContainer;
