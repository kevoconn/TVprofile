// import { useState } from "react";

// // import Clock from "./Clock";
// // import "./styles.css";

// const directory = [
//   { name: "Channel 2", col1: "About", col2: "biography", col3: "Resume" },
//   { name: "Channel 3", col1: "Portfolio", col2: "Project 1", col3: "Project 2", col4: "Project 3" },
//   { name: "Channel 4", col1: "Contact", col2: "Github", col3: "Email", col4: "Phone" },
// ];

// const Row = (props) => {
//   const { name, col1, col2, col3, col4 } = props;
//   return (
//     <div className="tRow">
//       <div className="colOne">{name}</div>
//       <div className="colTwo">{col1}</div>
//       <div className="colThree">{col2}</div>
//       <div className="colFour">{col3}</div>
//       <div className="colFive">{col4}</div>
//     </div>
//   );
// };

// const Table = (props) => {
//   const { data } = props;
//   return (
//     <div>
//       {data.map((row) => (
//         <Row key={row.name} {...row} />
//       ))}
//     </div>
//   );
// };

// function Guide() {
//   const [rows, setRows] = useState(directory);

//   return (
//     // <div className="timeBar"><Clock/>
//     <div className="directory">
//       <Table data={rows} />
//     </div>
//     // </div>
//   );
// }

// export default Guide;

import React, { useState } from 'react';
import NavTabs from './NavTabs';

const directory = [
  { name: 'Channel 2', col1: 'About', col2: 'biography', col3: 'Resume' },
  { name: 'Channel 3', col1: 'Portfolio', col2: 'Project 1', col3: 'Project 2', col4: 'Project 3' },
  { name: 'Channel 4', col1: 'Contact', col2: 'Github', col3: 'Email', col4: 'Phone' },
];

const Row = ({ name, col1, col2, col3, col4 }) => (
  <div className="tRow">
    <div className="colOne">{name}</div>
    <div className="colTwo">{col1}</div>
    <div className="colThree">{col2}</div>
    <div className="colFour">{col3}</div>
    <div className="colFive">{col4}</div>
  </div>
);

const Table = ({ data }) => (
  <div>
    {data.map((row) => (
      <Row key={row.name} {...row} />
    ))}
  </div>
);

function Guide() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [rows, setRows] = useState(directory);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageContent = () => {
    switch (currentPage) {
      case 'Home':
        return <div>${./pages/home}</div>;
      case 'About':
        return <div>About page content goes here</div>;
      case 'Blog':
        return <div>Blog page content goes here</div>;
      case 'Contact':
        return (
          <div>
            <h1>Contact page content goes here</h1>
            <Table data={rows} />
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {getPageContent()}
    </div>
  );
}

export default Guide;

