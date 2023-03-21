import React, { useState } from "react";
import Project1 from "./pages/project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/project3";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Guide from "./components/Guide";

function PageRoutes() {
  const [currentPage, setCurrentPage] = useState("Guide");

  const renderPage = () => {
    if (currentPage === "Guide") {
      return <Guide />;
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
    if (currentPage === "Project 2") {
      return <Project2 />;
    }
    if (currentPage === "Project 3") {
      return <Project3 />;
    }
    return <Guide />;
  };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <PageLinks currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>

    );

}

export default PageRoutes;