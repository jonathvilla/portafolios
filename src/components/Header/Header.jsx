import React from 'react'; // <-- Esta es la línea clave
import { Link } from 'react-router-dom'; // (Opcional, pero recomendado si usas rutas)

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-blue-200">Inicio</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-200">Acerca</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-blue-200">Proyectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;