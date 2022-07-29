import React from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Gallery from "./components/Gallery";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
