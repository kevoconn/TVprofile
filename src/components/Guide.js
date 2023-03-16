import { useState } from "react";
import "./Guide.css";

const directory = [
  { name: "Channel 2", col1: "About Me", col2: "biography", col3: "Resume" },
  { name: "Channel 3", col1: "Portfolio", col2: "Project 1", col3: "Project 2", col4: "Project 3" },
  { name: "Channel 4", col1: "Contact", col2: "Github", col3: "Email", col4: "Phone" },
];

const Row = (props) => {
  const { name, col1, col2, col3, col4 } = props;
  return (
    <div className="tRow">
      <div className="colOne">{name}</div>
      <div className="colTwo">{col1}</div>
      <div className="colThree">{col2}</div>
      <div className="colFour">{col3}</div>
      <div className="colFive">{col4}</div>
    </div>
  );
};

const Table = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((row) => (
        <Row key={row.name} {...row} />
      ))}
    </div>
  );
};

function Guide() {
  const [rows, setRows] = useState(directory);

  return (
    <div className="directory">
      <Table data={rows} />
    </div>
  );
}

export default Guide;
