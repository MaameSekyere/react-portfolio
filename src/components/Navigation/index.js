import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation(props) {
  const {
    NavLinks = [],
    setCurrentLink,
    contactSelected,
    setContactSelected,
    currentLink,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentLink.name);
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
              onClick={() => setContactSelected(false)}
            >
              About Me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {NavLinks.map((Navlink) => (
            <li
              className={`mx-1 ${
                currentLink.name === Navlink.name &&
                !contactSelected &&
                "navActive"
              }`}
              key={Navlink.name}
            >
              <span
                onClick={() => {
                  setCurrentLink(Navlink);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(Navlink.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
