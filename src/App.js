import React, { useState } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import "./App.css";

function App() {
  const [NavLinks] = useState([{ name: "portfolio", description: " photos" }]);

  const [currentLink, setCurrentLink] = useState(NavLinks[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Navigation>
        NavLinks={NavLinks}
        setCurrentLink={setCurrentLink}
        currentLink={currentLink}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Navigation>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentLink={currentLink}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
