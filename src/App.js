import React from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
