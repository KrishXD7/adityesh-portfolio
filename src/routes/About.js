import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';
import photographerImage from '../adityesh/Adityesh.jpg'

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis iaculis neque. Morbi eu scelerisque lorem. Fusce scelerisque felis at feugiat tempus. Fusce sagittis mi et lorem volutpat aliquam. Suspendisse consectetur eros a gravida luctus. Quisque facilisis sodales arcu vel congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam et nisl id ultricies. Nulla vehicula urna eu cursus sagittis. Proin at tincidunt sem. Sed auctor mi mi, sed cursus lectus imperdiet sed. Fusce congue ac ante vel pharetra. Phasellus congue accumsan viverra.
          </p>
        </div>
        <div className="about-image">
          <img src={photographerImage} alt="Photographer" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
