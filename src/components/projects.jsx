import React from 'react';
import '../styles/projects.css';

function Experience() {
  const experiences = [
    {
      title: "Developpeur FullStack",
      company: "INVISO Group",
      desc: "Conception, développement et amélioration de différentes applications BI et applications web. Mise en place de processus de validation numérique via Therefore et API. Automatisation et optimisation des workflows internes.",
      tech: "BI, Web, Therefore, API"
    },
    {
      title: "Stagiaire Développeur BI",
      company: "Webhelp-Concentrix",
      date: "Mars 2024 - Août 2024",
      desc: "Gestion et optimisation de bases de données SQL Server, développement de packages SSIS (ETL) et création de scripts C# pour l'automatisation des données.",
      tech: "SQL Server, SSIS (ETL), C#"
    },
    {
      title: "Stagiaire en Informatique de Gestion",
      company: "MESUPRES",
      date: "Mars 2023 - Juillet 2023",
      desc: "Gestion du système de bourses étudiantes. Développement d'un site web d'orientation pour les nouveaux bacheliers en PHP (Laravel) avec Filament.",
      tech: "PHP, Laravel, Filament"
    }
  ];

  return (
    <section className="projects-section" id="experiences">
      <div className="projects-header">
        <h2 className="section-title">Mon <span className="accent-color">Expérience</span></h2>
        <p className="section-subtitle">Mon parcours professionnel.</p>
      </div>

      <div className="projects-grid">
        {experiences.map((exp, idx) => (
          <div key={idx} className="project-card">
            <div className="project-content">
              <h3>{exp.title}</h3>
              <h4 style={{ color: '#00df9a', margin: '5px 0 15px 0' }}>{exp.company}</h4>
              <p>{exp.desc}</p>
              <div className="tech-stack">
                {exp.tech.split(', ').map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

