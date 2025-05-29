
import React, { useEffect } from "react"; // Añadido useEffect aquí 
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Typewriter from "typewriter-effect";
import "./Home.css";
// Si no tienes imagen, puedes usar un placeholder o eliminar esta línea
// import yourPhoto from "../../assets/your-photo.jpg";

const Home = () => {
  useEffect(() => {
    // Cargar particles.js solo si existe en window
    if (typeof window !== "undefined" && window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { random: true, value: 0.5 },
          size: { random: true, value: 3 },
          line_linked: { 
            enable: true, 
            distance: 150, 
            color: "#ffffff", 
            opacity: 0.4, 
            width: 1 
          },
          move: { enable: true, speed: 2 }
        }
      });
    }
  }, []);

  return (
    <div className="home">
      <div id="particles-js" className="particles-container"></div>
      
      <Header />
      
      <main className="hero">
        <div className="hero__content">
          {/* Opcional: Si quieres usar una imagen */}
          {/* <img 
            src={yourPhoto || "https://via.placeholder.com/150"} 
            alt="Tu nombre" 
            className="hero__avatar" 
          /> */}
          
          <h1 className="hero__title">
            <Typewriter
              options={{
                strings: [
                  "Hola, soy [Tu Nombre]", 
                  "Desarrollador Full Stack", 
                  "Bienvenido a mi portafolio"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          
          <p className="hero__description">
            Creo soluciones digitales con tecnologías modernas como React y Node.js
          </p>
          
          <div className="hero__buttons">
            <Button 
              text="Ver proyectos" 
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }} 
              className="btn--primary"
            />
            <Button 
              text="Contacto" 
              onClick={() => window.location.href = "mailto:tu@email.com"} 
              className="btn--secondary pulse"
            />
          </div>
        </div>
      </main>
      
      <div className="tech-icons">
        <span role="img" aria-label="React">⚛️</span>
        <span role="img" aria-label="JavaScript">💻</span>
        <span role="img" aria-label="Node">🚀</span>
      </div>
    </div>
  );
};

export default Home;