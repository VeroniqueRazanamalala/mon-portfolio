import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

function Contact() {
  const form = useRef();
  // États possibles : 'idle' (attente), 'loading' (chargement), 'success' (succès)
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading"); // Active la ronde qui tourne

    emailjs.sendForm(
      "service_fxaxfks",
      "template_3r17nqk",
      form.current,
      "pkuEQS1dx2WKUmuZr" // REMPLACE PAR TA CLÉ PUBLIQUE EMAILJS
    )
      .then((result) => {
        console.log(result.text);
        setStatus("success"); // Affiche le message de succès
        e.target.reset(); // Vide le formulaire

        // Revient à l'état normal après 4 secondes
        setTimeout(() => setStatus("idle"), 4000);
      }, (error) => {
        console.log(error.text);
        alert("Une erreur est survenue.");
        setStatus("idle");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="section-title">Me <span className="accent-color">Contacter</span></h2>
        <p className="section-subtitle">Vous avez un projet en tête ? Discutons-en ensemble.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          {/* Bloc Localisation */}
          <div className="info-box">
            <span className="info-icon">
              <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </span>
            <div>
              <h4>Localisation</h4>
              <p>Lot 153 cité ambodin'isotry, Antananarivo</p>
            </div>
          </div>

          {/* Bloc Email */}
          <div className="info-box">
            <span className="info-icon">
              <svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </span>
            <div>
              <h4>Email</h4>
              <p>veroniquerazanamalala57@gmail.com</p>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Votre Nom" required />
            <input type="email" name="user_email" placeholder="Votre Email" required />
          </div>
          <input type="text" name="subject" placeholder="Sujet" required />
          <textarea name="message" placeholder="Votre Message" rows="6" required></textarea>

          <button
            type="submit"
            className={`btn-submit ${status}`}
            disabled={status !== "idle"}
          >
            {status === "idle" && "Envoyer le message"}
            {status === "loading" && <div className="spinner"></div>}
            {status === "success" && "✓ Message envoyé !"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
