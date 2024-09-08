import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  const personName = {
    first: "Umut",
    last: "Can",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name="Umut" messageCount={10} isLoggedIn={false} /> */}
      <Greet name="Umut" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
