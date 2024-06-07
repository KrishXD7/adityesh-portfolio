import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';
import { Instagram, Twitter } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <div className="contact-left">
          <h2>Follow my socials</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com/yourphotographerprofile" target="_blank" rel="noopener noreferrer">
              <Instagram fontSize="large" />
            </a>
            <a href="https://twitter.com/yourphotographerprofile" target="_blank" rel="noopener noreferrer">
              <Twitter fontSize="large" />
            </a>
          </div>
        </div>
        <div className="contact-right">
          <h2>Text me on WhatsApp!</h2>
          <a href="https://wa.me/7358480891" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon fontSize="large" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
