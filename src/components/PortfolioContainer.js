import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Project1 from "./pages/project1";
import About from "./pages/about";
import Project2 from "./pages/project2";
import Contact from "./pages/contact";
import Project3 from "./pages/project3";
import Resume from "./pages/resume";
import Clock from "./Clock";



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
  // this method is used to render the page based on the current page state
  const renderPage = () => {
    if (currentPage === "Project1") {
      return <Project1 />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project2") {
      return <Project2 />;
    }
    if (currentPage === "Project3") {
      return <Project3 />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
      return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {renderPage()}
      <Clock />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* this is rendering the page based on the current page state */}
    </div>
  );
}
