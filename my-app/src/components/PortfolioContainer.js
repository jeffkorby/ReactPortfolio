import React, { useState } from 'react';
import Navbar from './Navbar'
import Skills from './pages/Skills';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

 //Checking current page and rendering accordingly.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}