import React, { useState, useEffect, useRef } from 'react';
import "../styles/about.css";


function About() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the skills section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section className="about-section" id="apropos">
      <div className="about-container">

        <div className="about-text-content" style={{ position: 'relative', zIndex: 1 }}>
          <div className="gears-background">
            <svg className="bg-gear gear-top" viewBox="0 0 24 24" fill="#00df9a"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" /></svg>
            <svg className="bg-gear gear-bottom" viewBox="0 0 24 24" fill="#00df9a"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" /></svg>
          </div>

          <h1 className="about-title">je suis <span className="accent-color">Veronique.</span></h1>

          <p className="about-description">
            Je suis développeuse FullStack avec 2 ans d'expérience en développement logiciel et web. Passionnée par la programmation et les technologies numériques, je conçois et développe des solutions performantes, fiables et adaptées aux besoins des utilisateurs, j'ai relevé plusieurs défis techniques en utilisant différents langages et frameworks pour créer des applications web fonctionnelles et optimisées. Mon objectif est de continuer à évoluer en apportant des solutions numériques innovantes et de qualité au sein d'une équipe dynamique.
          </p>

          <a href="#contact"><button className="btn-contact" style={{ marginTop: '20px' }}>contactez-moi</button></a>
        </div>

        <div className="about-skills-content" ref={skillsRef}>
          {[
            {
              name: 'Visual Studio Code',
              icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="#00df9a"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" /></svg>,
              progress: '90%'
            },
            {
              name: 'Postman',
              icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="#00df9a"><path d="M23.1,1.5c-0.2-0.2-0.5-0.3-0.8-0.2l-21,8c-0.3,0.1-0.4,0.4-0.3,0.7s0.4,0.5,0.7,0.5l8.6,1.4l5.3-4.9 c0.3-0.3,0.7-0.2,0.9,0.1c0.3,0.3,0.2,0.7-0.1,0.9l-5,4.7v5.5c0,0.3,0.2,0.6,0.5,0.6h0.1c0.3-0.1,0.4-0.3,0.4-0.6v-3.7l4.4,4.4 c0.2,0.2,0.5,0.2,0.7,0.1l6.1-16C23.4,2,23.3,1.7,23.1,1.5z" /></svg>,
              progress: '50%'
            },
            {
              name: 'Git Bash',
              icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="#00df9a"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.738 2.739c.642-.216 1.386-.073 1.902.443.856.857.856 2.249 0 3.105-.857.857-2.249.857-3.106 0-.535-.535-.678-1.298-.448-1.944l-2.458-2.458v3.69c.214.22.355.518.355.845 0 .857-.857 2.25-1.713 2.25-.857 0-1.714-1.393-1.714-2.25 0-.327.141-.625.355-.845v-3.69c-.214-.22-.355-.518-.355-.845 0-.66.368-1.229.89-1.54L6.022 3.992.452 9.563c-.603.604-.603 1.583 0 2.188l10.48 10.48c.604.604 1.582.604 2.188 0l10.426-10.425c.604-.604.604-1.584 0-2.189L23.546 10.93z" /></svg>,
              progress: '80%'
            },
            {
              name: 'Laragon',
              icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="#00df9a"><path d="M12 2L2 7l10 5 10-5-10-5zm0 11.5l-10-5V13l10 5 10-5V8.5l-10 5z" /></svg>,
              progress: '75%'
            },
            {
              name: 'SQL Server',
              icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="#00df9a"><path d="M12 2C6.48 2 2 4.24 2 7c0 2.22 3.11 4.14 7.4 4.8L8.62 14H15.4l-.79-2.2C18.89 11.14 22 9.22 22 7c0-2.76-4.48-5-10-5zm0 13c-5.52 0-10-2.24-10-5v3c0 2.76 4.48 5 10 5s10-2.24 10-5v-3c0 2.76-4.48 5-10 5zm0 7c-5.52 0-10-2.24-10-5v3c0 2.76 4.48 5 10 5s10-2.24 10-5v-3c0 2.76-4.48 5-10 5z" /></svg>,
              progress: '76%'
            },
            {
              name: 'DBeaver',
              icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="#00df9a"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V19h-2v-2.07A5.002 5.002 0 0 1 7.07 13H5v-2h2.07A5.002 5.002 0 0 1 11 7.07V5h2v2.07A5.002 5.002 0 0 1 16.93 11H19v2h-2.07A5.002 5.002 0 0 1 13 16.93zM9 12a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" /></svg>,
              progress: '60%'
            },
            {
              name: 'Microsoft Visual Studio',
              icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="#00df9a"><path d="M17.34 2.52l-5.6 5.37-4.13-2.92L2.09 9.38v5.52l5.52 4.41 4.13-2.92 5.6 5.37a.89.89 0 0 0 1.5-.7v-17.8a.89.89 0 0 0-1.5-.7zM7.22 13.91l-3.23-2.58 3.23-2.58v5.16zm9.33 3.4L11.7 13.2l4.85-3.46v7.57zm0-9.84v7.57L11.7 11.6l4.85-3.46z" /></svg>,
              progress: '50%'
            },
            {
              name: 'Antigravity AI',
              icon: <svg viewBox="0 0 24 24" width="24" height="24" fill="#00df9a"><path d="M19 3l-1.32 2.89L14.78 7.2l2.9 1.31L19 11.4l1.32-2.89 2.9-1.31-2.9-1.31L19 3zm-7.66 3.19L9.12 2l-2.22 4.19L2.7 8.41l4.2 2.21L9.12 14.81l2.22-4.19 4.2-2.21-4.2-2.22zM19 14.8l-1.32 2.89-2.9 1.31 2.9 1.31L19 23l1.32-2.89 2.9-1.31-2.9-1.31L19 14.8z" /></svg>,
              progress: '65%'
            }
          ].map((item, index) => (
            <div
              className="skill-item"
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease ${index * 0.1}s`
              }}
            >
              <div className="skill-header">
                <span className="skill-icon" style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>
                <span className="skill-name">{item.name}</span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: isVisible ? item.progress : '0%',
                    transition: `width 1s cubic-bezier(0.1, 0.7, 0.1, 1) ${index * 0.1 + 0.3}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="services-container">

        <div className="left-gear-icon" style={{ flex: 0.8, position: 'relative', minHeight: '350px', marginTop: '-50px' }}>
          {/* Grand engrenage */}
          <svg width="280" height="280" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="0.5" style={{ position: 'absolute', top: '0px', left: '10px', filter: 'drop-shadow(0 0 10px rgba(0, 223, 154, 0.3))', animation: 'rotate 15s linear infinite' }}>
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
          </svg>
          {/* Petit engrenage imbriqué */}
          <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="0.5" style={{ position: 'absolute', top: '150px', left: '160px', filter: 'drop-shadow(0 0 10px rgba(0, 223, 154, 0.3))', animation: 'rotateRev 20s linear infinite' }}>
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
          </svg>
        </div>

        <div className="services-content-wrapper" style={{ flex: 1.5 }}>
          <div className="services-grid">
            <div className="service-item" style={{ flex: 1 }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Développement Web & BI
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </h3>
              <ul>
                <li><span className="accent-color">Développement</span> d'applications web et BI</li>
                <li><span className="accent-color">Frontend</span> dynamique avec React.js et Bootstrap</li>
                <li><span className="accent-color">Optimisation</span> et correction d'applications existantes</li>
              </ul>
            </div>
            <div className="service-item" style={{ flex: 1 }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Bases de données & API
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </h3>
              <ul>
                <li><span className="accent-color">Gestion</span> de bases de données (SQL Server, MySQL)</li>
                <li><span className="accent-color">Digitalisation</span> et automatisation via Therefore et API</li>
                <li><span className="accent-color">Conception</span> et intégration de workflows</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="skills-logos-container">
        <h4 className="skills-logos-title">Mes compétences</h4>
        <div className="skills-marquee-wrapper">
          <div className="skills-marquee-track">
            {[1, 2].map((key) => (
              <React.Fragment key={key}>
                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="#00df9a">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M3 3h18v18H3V3zm11.73 14.5c0 1.25-.9 2.15-2.25 2.15s-2.1-.65-2.1-1.95v-4.5h1.5v4.5c0 .55.3.85.7.85s.75-.3.75-.85v-1.1c0-1.1-.75-1.5-1.85-2.05-1.5-.7-2.6-1.45-2.6-3.25 0-1.4 1.15-2.2 2.45-2.2 1.3 0 2.25.75 2.25 2.05h-1.5c0-.6-.35-.9-.85-.9s-.85.35-.85.9c0 .95.7 1.3 1.7 1.75 1.5.7 2.75 1.5 2.75 3.55zm-6.15 2.15c-1.3 0-2.25-.85-2.25-2.15h1.5c0 .55.3.85.75.85s.75-.3.75-.85V9.1h1.5v8.4c0 1.3-.9 2.15-2.25 2.15z" />
                  </svg>
                  <span>javascript</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2.5" fill="#00df9a" stroke="none" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
                  </svg>
                  <span>react-js</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M30 5C20 5 20 15 20 15v5h10v2H15C5 22 5 32 5 32s0 10 10 10h5v-5c0-5.5 4.5-10 10-10h10c5.5 0 10-4.5 10-10V15C50 5 40 5 30 5z" fill="#00df9a" />
                    <path d="M30 55c10 0 10-10 10-10v-5H30v-2h15c10 0 10-10 10-10s0-10-10-10h-5v5c0 5.5-4.5 10-10 10H20c-5.5 0-10 4.5-10 10v2c0 10 10 10 20 10z" fill="#00df9a" opacity="0.6" />
                  </svg>
                  <span>python</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="3">
                    <ellipse cx="30" cy="30" rx="28" ry="16" />
                    <text x="30" y="37" fill="#00df9a" stroke="none" fontSize="22" fontWeight="bold" fontFamily="Arial" textAnchor="middle">php</text>
                  </svg>
                  <span>php</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="2.5" strokeLinejoin="round">
                    <path d="M10 5l3.5 40L30 55l16.5-10L50 5H10z" />
                    <path d="M16 15h28l-1 10H17l1.5 15 11.5 4 11.5-4 .5-6H35" />
                  </svg>
                  <span>html</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="2.5" strokeLinejoin="round">
                    <path d="M10 5l3.5 40L30 55l16.5-10L50 5H10z" />
                    <path d="M16 15h28l-1 10H17l1.5 15 11.5 4 11.5-4 .5-6" />
                  </svg>
                  <span>css</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="3">
                    <rect x="5" y="15" width="50" height="30" rx="5" />
                    <text x="30" y="36" fill="#00df9a" stroke="none" fontSize="16" fontWeight="bold" fontFamily="Arial" textAnchor="middle">django</text>
                  </svg>
                  <span>django</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 45c0 5 20 5 20 0V25H15v20z" />
                    <path d="M35 28h5c3 0 5 2 5 5s-2 5-5 5h-5" />
                    <path d="M10 50h30" />
                    <path d="M20 15c0-5 3-5 3-10M27 15c0-5 3-5 3-10" />
                  </svg>
                  <span>java</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="3">
                    <rect x="10" y="10" width="40" height="40" rx="8" />
                    <text x="30" y="40" fill="#00df9a" stroke="none" fontSize="30" fontWeight="bold" fontFamily="Arial" textAnchor="middle">B</text>
                  </svg>
                  <span>bootstrap</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="3" strokeLinejoin="round">
                    <path d="M30 10L10 20v20l20 10 20-10V20L30 10z" />
                    <path d="M30 10v20l20-10" />
                    <path d="M10 20l20 10v20" />
                  </svg>
                  <span>laravel</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="2">
                    <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" />
                    <text x="30" y="38" fill="#00df9a" stroke="none" fontSize="26" fontWeight="bold" fontFamily="Arial" textAnchor="middle">F</text>
                  </svg>
                  <span>filament</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M30 55C30 55 50 45 50 25C50 15 40 5 30 5C20 5 10 15 10 25C10 45 30 55 30 55Z" />
                    <path d="M30 55V25" />
                  </svg>
                  <span>springboot</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="2" strokeLinejoin="round">
                    <polygon points="30,10 50,22 50,42 30,54 10,42 10,22" />
                    <circle cx="30" cy="54" r="3" fill="#00df9a" />
                    <circle cx="50" cy="42" r="3" fill="#00df9a" />
                    <circle cx="10" cy="42" r="3" fill="#00df9a" />
                    <circle cx="50" cy="22" r="3" fill="#00df9a" />
                    <circle cx="10" cy="22" r="3" fill="#00df9a" />
                    <circle cx="30" cy="10" r="3" fill="#00df9a" />
                    <text x="30" y="35" fill="#00df9a" stroke="none" fontSize="14" fontWeight="bold" fontFamily="Arial" textAnchor="middle">js</text>
                  </svg>
                  <span>node-js</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="2">
                    <ellipse cx="30" cy="20" rx="20" ry="6" />
                    <path d="M10 20v20c0 3.3 9 6 20 6s20-2.7 20-6V20" />
                    <path d="M10 30c0 3.3 9 6 20 6s20-2.7 20-6" />
                    <text x="30" y="34" fill="#00df9a" stroke="none" fontSize="11" fontWeight="bold" fontFamily="Arial" textAnchor="middle">MySQL</text>
                  </svg>
                  <span>mysql</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="3">
                    <circle cx="30" cy="30" r="25" />
                    <text x="30" y="37" fill="#00df9a" stroke="none" fontSize="20" fontWeight="bold" fontFamily="Arial" textAnchor="middle">ex</text>
                  </svg>
                  <span>express</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="#00df9a" strokeWidth="2">
                    <polygon points="30,5 55,20 55,40 30,55 5,40 5,20" />
                    <text x="30" y="38" fill="#00df9a" stroke="none" fontSize="24" fontWeight="bold" fontFamily="Arial" textAnchor="middle">C#</text>
                  </svg>
                  <span>c#</span>
                </div>

                <div className="skill-logo-item">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span>github</span>
                </div>

              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
