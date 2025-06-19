// import React from "react";
// import Header from "../../components/Header/Header";
// import "./Projects.css";
// import Button from "../../components/Button/Button";

// const projectList = [
//   {
//     title: "App de Predicciones Deportivas",
//     description: "Herramienta que consume APIs deportivas para generar pronósticos en tiempo real.",
//     image: "https://via.placeholder.com/300x180.png?text=Proyecto+1",
//     demoLink: "#",
//     codeLink: "#",
//     techs: ["React", "Node.js", "API Sports"],
//   },
//   {
//     title: "Gestor de Sorteos",
//     description: "Sistema para administrar sorteos conectados con resultados de loterías tradicionales.",
//     image: "https://via.placeholder.com/300x180.png?text=Proyecto+2",
//     demoLink: "#",
//     codeLink: "#",
//     techs: ["Vue", "Spring Boot", "PostgreSQL"],
//   },
// ];

// const Projects = () => {
//   return (
//     <div className="projects">
//       <Header />
//       <section className="projects-section">
//         <h1 className="section-title">Mis Proyectos</h1>
//         <p className="section-description">Algunos trabajos destacados que he desarrollado con pasión.</p>

//         <div className="project-grid">
//           {projectList.map((project, index) => (
//             <div className="project-card" key={index}>
//               <img src={project.image} alt={project.title} className="project-image" />
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>

//               <div className="tech-list">
//                 {project.techs.map((tech, i) => (
//                   <span className="tech-badge" key={i}>{tech}</span>
//                 ))}
//               </div>

//               <div className="hero__buttons">
//   <Button
//     text="Ver Demo"
//     href={project.demoLink}
//     className=""
//     target="_blank"
//   />
//   <Button
//     text="Ver Código"
//     href={project.codeLink}
//     className=""
//     target="_blank"
//   />
// </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;
