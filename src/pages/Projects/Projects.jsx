// import React, { useEffect } from "react";
// import Layout from "../../components/Layout/Layout";
// import "./Projects.css";

// import AOS from 'aos';
// import 'aos/dist/aos.css';


// const projects = [
//     {
//         title: "App de Predicciones Deportivas",
//         description: "Herramienta que consume APIs deportivas para generar pronósticos en tiempo real.",
//         image: "https://via.placeholder.com/300x180.png?text=Proyecto+1",
//         demoLink: "#",
//         githubLink: "#",
//     },
//     {
//         title: "Gestor de Sorteos",
//         description: "Plataforma para la administración y resultados de sorteos en tiempo real.",
//         image: "https://via.placeholder.com/300x180.png?text=Proyecto+2",
//         demoLink: "#",
//         githubLink: "#",
//     },
//     {
//         title: "Gestor de Sorteos",
//         description: "Plataforma para la administración y resultados de sorteos en tiempo real.",
//         image: "https://via.placeholder.com/300x180.png?text=Proyecto+2",
//         demoLink: "#",
//         githubLink: "#",
//     },
//     {
//         title: "Gestor de Sorteos",
//         description: "Plataforma para la administración y resultados de sorteos en tiempo real.",
//         image: "https://via.placeholder.com/300x180.png?text=Proyecto+2",
//         demoLink: "#",
//         githubLink: "#",
//     },


// ];

// const Projects = () => {
//     useEffect(() => {
//         AOS.init({ duration: 800 });
//     }, []);

//     return (
//         <Layout>
//             <section className="projects">
//                 <h2 className="projects-title">Mis Proyectos</h2>
//                 <div className="projects-container">
//                     {projects.map((project, index) => (
//                         <div className="project-card" data-aos="fade-up" key={index}>
//                             <img src={project.image} alt={project.title} />
//                             <h3>{project.title}</h3>
//                             <p>{project.description}</p>
//                             <div className="project-buttons">
//                                 <a className="fancy-button" href={project.demoLink} target="_blank" rel="noopener noreferrer">
//                                     <span>Demo</span>
//                                 </a>
//                                 <a className="fancy-button" href={project.githubLink} target="_blank" rel="noopener noreferrer">
//                                     <span>GitHub</span>
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </Layout>
//     );
// };

// export default Projects;
import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./Projects.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "App de Predicciones Deportivas",
    description: "Herramienta que consume APIs deportivas para generar pronósticos en tiempo real.",
    image: "https://via.placeholder.com/300x180.png?text=Predicciones+Deportivas",
    demoLink: "#",
    githubLink: "#",
    technologies: ["React", "Node.js", "Tailwind"],
    badge: "Beta",
    badgeColor: "#facc15"
  },
  {
    title: "Gestor de Sorteos",
    description: "Plataforma para la administración y resultados de sorteos en tiempo real.",
    image: "https://via.placeholder.com/300x180.png?text=Gestor+de+Sorteos",
    demoLink: "#",
    githubLink: "#",
    technologies: ["Vue", "Firebase"],
    badge: "Nuevo",
    badgeColor: "#34d399"
  },
  {
    title: "Administrador de Tareas",
    description: "App simple de tareas con autenticación y persistencia.",
    image: "https://via.placeholder.com/300x180.png?text=Administrador+Tareas",
    demoLink: "#",
    githubLink: "#",
    technologies: ["React", "Express", "MongoDB"],
    badge: "Estable",
    badgeColor: "#60a5fa"
  },
  {
    title: "Portafolio Personal",
    description: "Mi portafolio interactivo y moderno con animaciones suaves y diseño responsive.",
    image: "https://via.placeholder.com/300x180.png?text=Portafolio",
    demoLink: "#",
    githubLink: "#",
    technologies: ["React", "CSS", "AOS"],
    badge: "Actualizado",
    badgeColor: "#f472b6"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Layout>
      <section className="projects">
        <h2 className="projects-title">Mis Proyectos</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              className="project-card"
              data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
              key={index}
            >
              {project.badge && (
                <span className="project-badge" style={{ backgroundColor: project.badgeColor }}>
                  {project.badge}
                </span>
              )}
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="tech-badge">{tech}</li>
                ))}
              </ul>
              <div className="project-buttons">
                <a className="fancy-button" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <span>Demo</span>
                </a>
                <a className="fancy-button" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
