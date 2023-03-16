import React, { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US"));

  useEffect(() => {
    const time = () => {
      const event = new Date();
      setTime(event.toLocaleTimeString("en-US"));
    };
    const intervalId = setInterval(time, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="Clock">
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;