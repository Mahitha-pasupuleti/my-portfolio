import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Mahitha © {new Date().getFullYear()}</p>

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/mahitha-pasupuleti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://github.com/Mahitha-pasupuleti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="pasupuleti.mahitha.work@gmail.com"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        <p className="footer-message">Made with ❤️ & good vibes</p>
      </div>
    </footer>
  );
}
