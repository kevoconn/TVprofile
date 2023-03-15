// import React from 'react';
// // First we import our Hello component from our components folder.
// import Hello from './components/Hello';

// // React apps typically have a single App component at the very top that can reference other React components.
// // This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
// function App() {
//   return <Hello />;
// }

// export default App;

import "./styles.css";

import EPG, { Channel, TimeLine, TimeSlot, Show } from "react-epg";

const MyEPG = () => (
  <EPG>
    <TimeLine channel={<Channel name="Biography" />}>
      <TimeSlot start={new Date("1/1/97 16:00")} end={new Date("1/1/97 16:30")}>
        <Show title="Kevin O'Connor" />
      </TimeSlot>
      <TimeSlot start={new Date("1/1/97 16:30")} end={new Date("1/1/97 17:30")}>
        <Show title="About Me" />
      </TimeSlot>
    </TimeLine>
    <TimeLine channel={<Channel name="History" />}>
      <TimeSlot start={new Date("1/1/97 16:00")} end={new Date("1/1/97 17:00")}>
        <Show title="Project 1" />
      </TimeSlot>
      <TimeSlot start={new Date("1/1/97 17:00")} end={new Date("1/1/97 18:45")}>
        <Show title="Project 2" />
      </TimeSlot>
    </TimeLine>
    <TimeLine channel={<Channel name="Contact" />}>
      <TimeSlot start={new Date("1/1/97 16:00")} end={new Date("1/1/97 17:00")}>
        <Show title="Github" />
      </TimeSlot>
      <TimeSlot start={new Date("1/1/97 17:00")} end={new Date("1/1/97 18:45")}>
        <Show title="Email" />
      </TimeSlot>
      <TimeSlot start={new Date("1/1/97 17:00")} end={new Date("1/1/97 18:45")}>
        <Show title="Phone" />
      </TimeSlot>
    </TimeLine>
  </EPG>
);

export default function App() {
  return (
    <div className="App">
      <MyEPG />
    </div>
  );
}

