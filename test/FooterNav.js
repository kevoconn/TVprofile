import React, { useState } from "react";
import Project1 from "./pages/project1";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import NavLinks from "./NavLink";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
  // this method is used to render the page based on the current page state
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project 1") {
      return <Project1 />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* this is rendering the page based on the current page state */}
      {renderPage()}
    </div>
  );
}
