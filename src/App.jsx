import React from 'react';
import './App.css'; 
import heroImg from './assets/images/photo1.png'; 

function App() {
  return (
    <div className="app-container">
      {/* BARRE DE NAVIGATION */}
      <nav className="navbar">
        <div className="logo-box">
          <div className="logo-top">V</div>
          <div className="logo-bottom">IOLA</div>
        </div>
        <ul className="nav-links">
          <li className="active-link">accueil</li>
          <li>à propos</li>
          <li>mes services</li>
          <li>projets</li>
          <li>me contacter</li>
        </ul>
      </nav>
      <main className="hero-section">
        <div className="hero-content">
          <p className="hero-intro">Bonjour,</p>
          <h1 className="hero-title">
            Je suis <span className="accent-color">Viola</span>
          </h1>
          
          <p className="hero-subtitle">
            Développeuse web <span className="accent">|</span> Web designer
          </p>

          <button className="btn-about">à propos de moi</button>
        </div>

        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Mon Espace de Travail" className="hero-image" />
        </div>
      </main>
    </div>
  );
}

export default App;
