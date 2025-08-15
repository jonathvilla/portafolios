import React from "react";
import Layout from "../../components/Layout/Layout";
import "./About.css";

const About = () => {
  return (
    <Layout>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-title">Acerca de Mí</h1>
            <div className="title-decoration"></div>
          </div>
          
          <div className="about-content">
            <div className="about-intro">
              <p className="intro-text">
                Soy <strong>Jonath Mercado</strong>, un desarrollador Full Stack apasionado por la 
                innovación digital y las tecnologías emergentes. Mi enfoque se centra en crear 
                soluciones modernas y eficientes que impacten positivamente en la experiencia del usuario.
              </p>
            </div>

            <div className="skills-section">
              <h2 className="section-title">Habilidades Técnicas</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <ul>
                    <li>React & Next.js</li>
                    <li>JavaScript/TypeScript</li>
                    <li>CSS3 & Tailwind CSS</li>
                    <li>HTML5 Semántico</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Backend</h3>
                  <ul>
                    <li>Node.js & Express</li>
                    <li>Python & Django</li>
                    <li>APIs RESTful</li>
                    <li>Bases de Datos SQL/NoSQL</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Herramientas</h3>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>Webpack & Vite</li>
                    <li>VS Code</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="experience-section">
              <h2 className="section-title">Experiencia & Intereses</h2>
              <div className="experience-cards">
                <div className="experience-card">
                  <div className="card-icon">🤖</div>
                  <h3>Inteligencia Artificial</h3>
                  <p>Exploración y implementación de soluciones con IA, machine learning y automatización inteligente.</p>
                </div>
                <div className="experience-card">
                  <div className="card-icon">🌐</div>
                  <h3>Desarrollo Web Moderno</h3>
                  <p>Creación de aplicaciones web responsivas y escalables utilizando las últimas tecnologías.</p>
                </div>
                <div className="experience-card">
                  <div className="card-icon">⚡</div>
                  <h3>Optimización & Performance</h3>
                  <p>Enfoque en la velocidad, SEO y mejores prácticas para crear experiencias excepcionales.</p>
                </div>
              </div>
            </div>

            <div className="philosophy-section">
              <h2 className="section-title">Mi Filosofía</h2>
              <blockquote className="philosophy-quote">
                "El código no es solo funcionalidad, es arte. Cada línea debe tener propósito, 
                cada componente debe contar una historia, y cada proyecto debe dejar una huella positiva."
              </blockquote>
            </div>

            <div className="stats-section">
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Proyectos Completados</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Años de Experiencia</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;