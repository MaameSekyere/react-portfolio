import React from "react";

function Navigation() {
  const NavLinks = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
  ];

  function NavlinkSelected(name) {
    console.log("hello");
  }
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Maame Sekyere
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {NavLinks.map((Navlink) => (
            <li className="mx-2" key={Navlink.name}>
              <span onClick={NavlinkSelected}> {Navlink.name} </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
