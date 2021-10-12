import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    return (
      <ul className="nav navbar">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#project"
            onClick={() => handlePageChange('Project')}
            // Check to see if the currentPage is `Project`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
          >
            Project
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#skills"
            onClick={() => handlePageChange('Skills')}
            // Check to see if the currentPage is `Skills`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }

export default Navbar;