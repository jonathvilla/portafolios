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

import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import avatar from '../../assets/avatar.jpg';
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout"; // Asegúrate de usar esta ruta correctamente

const Home = () => {
  return (
    <Layout>
      <section className="home" id="home">
        <div className="particles-container">
          {/* Aquí podrías integrar tsParticles más adelante */}
        </div>

        <div className="hero">
          <div className="hero__content">
            <img src={avatar} alt="Avatar" className="hero__avatar" />

            <h1 className="hero__title">
              <Typewriter
                options={{
                  strings: [
                    "Hola, soy El Jonath mercado",
                    "Desarrollador Full Stack",
                    "Bienvenido a mi portafolio",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 40,
                }}
              />
            </h1>

            <p className="hero__description">
              Desarrollador apasionado por la innovación digital, la inteligencia artificial y las soluciones modernas.
            </p>

            <div className="hero__buttons">
              <Link to="/proyectos" className="fancy-button">Ver proyectos</Link>
              <Link to="/contacto" className="fancy-button">Contáctame</Link>
            </div>
          </div>
        </div>

        <div className="tech-icons">
          <span title="React">⚛️</span>
          <span title="JavaScript">💻</span>
          <span title="Node.js">🚀</span>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
