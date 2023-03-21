import React from 'react';

// What does this page of code do?
// 

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <button>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
          </a>
          </button>
          <button>
        <a
          href="#project1"
          onClick={() => handlePageChange('Project1')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'Project1' ? 'nav-link active' : 'nav-link'}
        >
              Project1
       
       </a>
       </button>
       <button>
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </button>
      <button>
        <a
          href="#project2"
          onClick={() => handlePageChange('Project2')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Project2' ? 'nav-link active' : 'nav-link'}
        >
          Project2
        </a>
        </button>
        <button>
        <a
          href="#project3"
          onClick={() => handlePageChange('Project3')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Project3' ? 'nav-link active' : 'nav-link'}
        >
          Project3
        </a>
        </button>
        <button>
        <a
          href="#resume"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        </button>
        </div>
  );
}

export default NavTabs;
