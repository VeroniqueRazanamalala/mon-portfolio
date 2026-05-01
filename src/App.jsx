import React from 'react';
import './App.css';
import heroImg from './assets/images/photo1.png';
import About from './components/about';
import Experience from './components/projects';
import Contact from './components/contact';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      {/* BARRE DE NAVIGATION */}
      <nav className="navbar">
        <div className="logo-box">
          <div className="logo-top">V</div>
          <div className="logo-bottom">WINNE</div>
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active-link" style={{ color: 'inherit', textDecoration: 'none' }}>accueil</a></li>
          <li><a href="#apropos" style={{ color: 'inherit', textDecoration: 'none' }}>à propos</a></li>
          <li><a href="#experiences" style={{ color: 'inherit', textDecoration: 'none' }}>expériences</a></li>
          <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>me contacter</a></li>
        </ul>
      </nav>
      <main className="hero-section">
        <div className="hero-content">
          <p className="hero-intro">Bonjour,</p>
          <h1 className="hero-title">
            Je suis <span className="accent-color">Veronique</span>
          </h1>

          <p className="hero-subtitle">
            Développeuse <span className="accent">FullStack</span>
          </p>

          <a href="#apropos"><button className="btn-about">à propos de moi</button></a>
        </div>

        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Mon Espace de Travail" className="hero-image" />
        </div>
      </main>
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
