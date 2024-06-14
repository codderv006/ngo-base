import React from 'react';
import './Home.css';
import Slideshow from '../components/Slideshow';

const Home = () => {
  return (
    <div className="home">
      <div className="home-banner">
        {/* <div className="home-banner-content">
          <h1>NGO Name</h1>
          <p>Our tagline goes here</p>
        </div> */}
      </div>
      <Slideshow />
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="/path/to/team-photo1.jpg" alt="Team Member 1" />
            <div className="team-info">
              <h3>John Doe</h3>
              <p>Role: Director</p>
              <p>Responsibilities: Managing operations</p>
            </div>
          </div>
          {/* Add more team members similarly */}
        </div>
      </section>
      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <img src="/path/to/impact-photo1.jpg" alt="Impact 1" />
            <div className="impact-info">
              <p>Project in Location A</p>
              <p>1000 people benefited</p>
            </div>
          </div>
          {/* Add more impact cards similarly */}
        </div>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@ngo.org</p>
        <p>Phone: +1234567890</p>
        <button className="donate-btn">Donate Now</button>
      </section>
      <footer className="footer">
        <p>&copy; 2024 NGO Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
