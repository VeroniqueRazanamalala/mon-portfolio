import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="section-title">Me <span className="accent-color">Contacter</span></h2>
        <p className="section-subtitle">Vous avez un projet en tête ? Discutons-en ensemble.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <span className="info-icon">📍</span>
            <div>
              <h4>Localisation</h4>
              <p>Lot 153 cité ambodin'isotry</p>
            </div>
          </div>
          <div className="info-box">
            <span className="info-icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:veroniquerazanamalala57@gmail.com" style={{color: '#a0a0a0', textDecoration: 'none'}}>veroniquerazanamalala57@gmail.com</a></p>
            </div>
          </div>
          <div className="info-box">
            <span className="info-icon">📱</span>
            <div>
              <h4>Téléphone</h4>
              <p>
                <a href="tel:+261387092374" style={{color: '#a0a0a0', textDecoration: 'none'}}>+261 38 70 923 74</a> / <a href="tel:+261325775760" style={{color: '#a0a0a0', textDecoration: 'none'}}>32 57 757 60</a>
              </p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Votre Nom" required />
            <input type="email" placeholder="Votre Email" required />
          </div>
          <input type="text" placeholder="Sujet" required />
          <textarea placeholder="Votre Message" rows="6" required></textarea>
          <button type="submit" className="btn-submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
