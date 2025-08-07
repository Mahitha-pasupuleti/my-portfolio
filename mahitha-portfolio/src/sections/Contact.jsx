import React from 'react';
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiClock
} from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Let’s Connect</h2>
        <p className="contact-subtitle">Open to new opportunities, collaborations, and meaningful conversations.</p>

        <div className="contact-info">
          <div className="info-item">
            <FiMail className="info-icon" />
            <a href="pasupuleti.mahitha.work@gmail.com">pasupuleti.mahitha.work@gmail.com</a>
          </div>

          <div className="info-item">
            <FiPhone className="info-icon" />
            <a href="tel:+16576819589">+1 (657) 681-9589</a>
          </div>

          <div className="info-item">
            <FiLinkedin className="info-icon" />
            <a href="https://www.linkedin.com/in/mahitha-pasupuleti/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/mahitha
            </a>
          </div>

          <div className="info-item">
            <FiGithub className="info-icon" />
            <a href="https://github.com/Mahitha-pasupuleti" target="_blank" rel="noopener noreferrer">
              github.com/mahitha
            </a>
          </div>

          <div className="info-item">
            <FiMapPin className="info-icon" />
            <span>Fullerton, CA (Pacific Time)</span>
          </div>

          <div className="info-item">
            <FiClock className="info-icon" />
            <span>Timezone: PST (GMT-7)</span>
          </div>
        </div>
      </div>
    </section>
  );
}