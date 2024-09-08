import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";

function App() {
  const personName = {
    first: "Umut",
    last: "Can",
  };
  return (
    <div className="App">
      <Greet name="Umut" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
