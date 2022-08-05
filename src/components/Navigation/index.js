import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {
  const { NavLinks = [], setCurrentLink, currentLink } = props;

  useEffect(() => {
    if (currentLink) {
      document.title = capitalizeFirstLetter(currentLink.name);
    }
    console.log(currentLink);
  }, [currentLink]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Maame Sekyere
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setCurrentLink(NavLinks[2])}
            >
              About Me
            </a>
          </li>
          <li className={`mx-2 ${"navActive"}`}>
            <span onClick={() => setCurrentLink(NavLinks[1])}>Contact</span>
          </li>
          <li className={`mx-2 ${"navActive"}`}>
            <span onClick={() => setCurrentLink(NavLinks[0])}>Portfolio</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
