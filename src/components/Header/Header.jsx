// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   const location = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { path: '/', label: 'Inicio' },
//     { path: '/about', label: 'Acerca' },
//     { path: '/projects', label: 'Proyectos' },
//     { path: '/contact', label: 'Contacto' },
//   ];

//   return (
//     <header className="header">
//       <div className="header__container">
//   <div className="header__logo">
//     <Link to="/">El Propio</Link>
//   </div>

//   <nav className={`header__nav ${isOpen ? 'header__nav--open' : ''}`}>
//     <ul>
//       {navItems.map(({ path, label }) => (
//         <li key={path}>
//           <Link
//             to={path}
//             className={`header__link ${location.pathname === path ? 'active' : ''}`}
//             onClick={() => setIsOpen(false)}
//           >
//             {label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </nav>

//   <button className="header__toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
// </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Acerca' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <header className="custom-header">
      <div className="container">
        <div className="logo">
          <Link to="/">El <span className="highlight">Propio</span></Link>
        </div>
        <nav>
          <ul className="nav-links">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;