import React from 'react';
import "../styles/about.css";
import maPhoto from "../assets/images/veronique.PNG";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-text-content">
          {/* Engrenages décoratifs agrandis */}
          <div className="gears-decoration">
            <svg className="big-gear g1" viewBox="0 0 24 24" fill="#00df9a"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" /></svg>
            <svg className="big-gear g2" viewBox="0 0 24 24" fill="#00df9a"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" /></svg>
          </div>

          <h1 className="about-title">je suis <span className="accent-color">Veronique.</span></h1>
          
          <p className="about-description">
            Bonjour, je suis Veronique. Je suis une développeuse full stack et designer. 
            Je travaille dans l'industrie du développement web depuis 2021. 
            J'ai de solides connaissances et de l'expérience en programmation et en design UI/UX.
          </p>

          <p className="about-tools">
            J'utilise ces outils pour développer des sites web : 
            <span className="white-text"> HTML, CSS, JAVASCRIPT, React-js, jQuery, Tailwind-css, WordPress, Figma.</span> 
          </p>
	
          <button className="btn-contact">contactez-moi</button>
        </div>

        <div className="about-visual">
           <div className="photo-frame-wrapper">
              <img src={maPhoto} alt="Veronique" className="profile-img" />
           </div>
        </div>

      </div>

      <div className="services-container">
        <div className="bottom-icon">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="1.5"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" /></svg>
        </div>
        
        <div className="services-content-wrapper">
          <div className="services-grid">
            <div className="service-item">
              <h3>Web Development <span className="icon-accent">⚓</span></h3>
              <ul><li>Clean Code</li><li>Responsive Website</li><li>Secure Website</li></ul>
            </div>
            <div className="service-item">
              <h3>Web Design <span className="icon-accent">🖌️</span></h3>
              <ul><li>Clean Design</li><li>Modern Design</li><li>Minimal Design</li></ul>
            </div>
          </div>

          <div className="my-skills-wrapper">
            <h4 className="skills-title">MES COMPÉTENCES</h4>
            <div className="skills-icons-grid">
              <div className="skill-box">
                <div className="icon-js">JS</div>
                <span>javascript</span>
              </div>
              <div className="skill-box">
                <div className="icon-react">⚛️</div>
                <span>react-js</span>
              </div>
              <div className="skill-box">
                <div className="icon-figma">F</div>
                <span>figma</span>
              </div>
              <div className="skill-box">
                <div className="icon-wp">W</div>
                <span>wordpress</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
