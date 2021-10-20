import React from 'react';
import '../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
     <div>
      <ul className="nav nav-tabs navbar-light bgtea">
        <h1 className="name">
          Jeff Korby
        </h1>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#skills"
            onClick={() => handlePageChange('Skills')}
            className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>  
    );
  }

export default Navbar;