// import React from 'react';
// import './Home.css';
// import Typewriter from 'typewriter-effect';
// import avatar from '../../assets/avatar.jpg'; // Asegúrate de que esta ruta es correcta
// import { Link } from "react-router-dom";
// import Footer from "../../components/Footer/Footer";

// const Home = () => {
//   return (
//     <section className="home" id="home">
//       <div className="particles-container">
//         {/* Aquí podrías integrar tsParticles más adelante */}
//       </div>

//       <div className="hero">
//         <div className="hero__content">
//           <img src={avatar} alt="Avatar" className="hero__avatar" />

//           <h1 className="hero__title">
//             <Typewriter
//               options={{
//                 strings: [
//                   "Hola, soy El Jonath mercado",
//                   "Desarrollador Full Stack",
//                   "Bienvenido a mi portafolio",
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 50,
//                 deleteSpeed: 40,
//               }}
//             />
//           </h1>

//           <p className="hero__description">
//             Desarrollador apasionado por la innovación digital, la inteligencia artificial y las soluciones modernas.
//           </p>

//           <div className="hero__buttons">
//              <Link to="/proyectos" className="fancy-button">Ver proyectos</Link>
//              <Link to="/contacto" className="fancy-button">Contáctame</Link>
//              <Link to="/proyectos" className="fancy-button">Ver proyectos</Link>
//              <Link to="/contacto" className="fancy-button">Contáctame</Link>
//           </div>
//         </div>
//       </div>

//       <div className="tech-icons">
//         <span title="React">⚛️</span>
//         <span title="JavaScript">💻</span>
//         <span title="Node.js">🚀</span>
//       </div>
//       <Footer />
//     </section>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import avatar from '../../assets/avatar.jpg';
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { downloadCV } from '../../utils/generateCV';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = async () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    try {
      // Pequeño delay para mostrar el estado de descarga
      await new Promise(resolve => setTimeout(resolve, 500));
      downloadCV();
    } catch (error) {
      console.error('Error al descargar CV:', error);
      alert('Error al descargar el CV. Inténtalo de nuevo.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Layout>
      <section className="home" id="home">
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>

        {/* Interactive Light Effect */}
        <div 
          className="mouse-light"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
          }}
        ></div>

        <div className="hero">
          <div className="hero__content">
            <div className="avatar-container">
              <img src={avatar} alt="Avatar" className="hero__avatar" />
              <div className="avatar-ring"></div>
              <div className="avatar-glow"></div>
            </div>

            <h1 className="hero__title">
              <Typewriter
                options={{
                  strings: [
                    "Hola, soy Jonath Mercado 👋",
                    "Desarrollador Full Stack 💻",
                    "Experto en React & Node.js ⚡",
                    "Creador de Experiencias Digitales 🚀",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h1>

            <p className="hero__description">
              Transformo ideas en <span className="highlight">soluciones digitales innovadoras</span> 
              con más de 2 años de experiencia. Especializado en desarrollo web moderno, 
              inteligencia artificial y arquitecturas escalables.
            </p>

            {/* Statistics Counter */}
            <div className="stats-counter">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Proyectos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Años</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Compromiso</span>
              </div>
            </div>

            <div className="hero__buttons">
              <Link to="/projects" className="fancy-button primary">
                <span>🚀 Ver Proyectos</span>
              </Link>
              <button 
                onClick={handleDownloadCV} 
                className={`fancy-button secondary ${isDownloading ? 'downloading' : ''}`}
                disabled={isDownloading}
              >
                <span>
                  {isDownloading ? '⏳ Generando...' : '📄 Descargar CV'}
                </span>
              </button>
              <Link to="/about" className="fancy-button tertiary">
                <span>👨‍💻 Conoce más</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💻 GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span>💼 LinkedIn</span>
              </a>
              <a href="mailto:jonath@example.com" className="social-link">
                <span>📧 Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Tech Stack */}
        <div className="tech-showcase">
          <div className="tech-title">🛠️ Mi Stack Tecnológico</div>
          <div className="tech-grid">
            <div className="tech-item" data-tech="React">
              <span className="tech-icon">⚛️</span>
              <span className="tech-name">React</span>
            </div>
            <div className="tech-item" data-tech="JavaScript">
              <span className="tech-icon">🟨</span>
              <span className="tech-name">JavaScript</span>
            </div>
            <div className="tech-item" data-tech="Node.js">
              <span className="tech-icon">🟢</span>
              <span className="tech-name">Node.js</span>
            </div>
            <div className="tech-item" data-tech="Python">
              <span className="tech-icon">🐍</span>
              <span className="tech-name">Python</span>
            </div>
            <div className="tech-item" data-tech="MongoDB">
              <span className="tech-icon">🍃</span>
              <span className="tech-name">MongoDB</span>
            </div>
            <div className="tech-item" data-tech="Docker">
              <span className="tech-icon">🐳</span>
              <span className="tech-name">Docker</span>
            </div>
          </div>
        </div>

        {/* Quick Project Preview */}
        <div className="featured-work">
          <h2 className="section-title">✨ Proyecto Destacado</h2>
          <div className="featured-card">
            <div className="project-preview">
              <div className="project-image-placeholder">
                <span className="project-icon">🌟</span>
              </div>
              <div className="project-details">
                <h3>Portfolio Interactivo</h3>
                <p>Una experiencia web moderna con animaciones fluidas y diseño responsivo.</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">CSS3</span>
                  <span className="tag">Responsive</span>
                </div>
                <Link to="/proyectos" className="project-link">Ver más proyectos →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Descubre más</div>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
