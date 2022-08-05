import React, { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [NavLinks] = useState([
    { name: "portfolio", description: "" },
    { name: "contact", description: "contact" },
    { name: "about me", description: "about me" },
  ]);

  const [currentLink, setCurrentLink] = useState(NavLinks[0]);
  console.log(currentLink);

  const render = () => {
    if (currentLink.name === "about me") {
      return <About></About>;
    }
    if (currentLink.name === "contact") {
      return <ContactForm></ContactForm>;
    }
    return <Gallery currentLink={currentLink}></Gallery>;
  };

  return (
    <div>
      <Navigation
        NavLinks={NavLinks}
        setCurrentLink={setCurrentLink}
        currentLink={currentLink}
      />
      <main>{render()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
