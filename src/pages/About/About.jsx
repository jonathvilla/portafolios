import React from "react";
import Header from "../../components/Header/Header";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Header />
      <h1>Acerca de Mí</h1>
      <p>Aquí puedes escribir información sobre ti.</p>
    </div>
  );
};

export default About;