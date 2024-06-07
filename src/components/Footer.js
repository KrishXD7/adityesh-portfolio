import "./FooterStyles.css";
import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <Link to="/Contact" className="footer-link">
          Contact me
        </Link>
        <div className="social-icons">
          <a href="https://www.instagram.com/yourphotographerprofile" target="_blank" rel="noopener noreferrer">
            <InstagramIcon style={{ fontSize: 40, color: '#E1306C' }} />
          </a>
          <a href="https://twitter.com/yourphotographerprofile" target="_blank" rel="noopener noreferrer">
            <TwitterIcon style={{ fontSize: 40, color: '#1DA1F2' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
