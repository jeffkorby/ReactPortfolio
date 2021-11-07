import React from 'react';
import myresume from '../assets/MyResume.pdf'
import downloadicon from '../assets/images/downloadicon.png'
import avatar from '../assets/images/avatar.png'


function Navbar({ currentPage, handlePageChange }) {
    return (
      <nav class="navbar is-info is-spaced has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
                <figure class="image is-96x96">
                    <img class="image is-rounded is-full-width" src={avatar} alt=""/>
                </figure>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
              <a
              class="navbar-item has-text-weight-bold ml-4 bl-4 is-size-4"
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'navbar-link active' : 'navbar-link'}
              >
              About Me
              </a>
              <a
              class="navbar-item has-text-weight-bold ml-4 bl-4 is-size-4"
              href="#Skills"
              onClick={() => handlePageChange('Skills')}
              className={currentPage === 'Skills' ? 'navbar-link active' : 'navbar-link'}
              >
              Skills
              </a>
              <a
              class="navbar-item has-text-weight-bold ml-4 bl-4 is-size-4"
              href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'navbar-link active' : 'navbar-link'}
              >
              My Work
              </a>
              <a
              class="navbar-item has-text-weight-bold ml-4 bl-4 is-size-4"
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'navbar-link active' : 'navbar-link'}
              >
              Contact Me
              </a>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control">
                        <a class="button is-primary" type="download" href={myresume} download={myresume}>
                            <span class="icon" href={downloadicon}>
                              <i href={downloadicon} class="fas fa-download is-size-5"></i>
                            </span>
                            <span class="has-text-weight-bold is-size-4">Resume</span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </nav>
    );
  }

export default Navbar;