import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/images/project1.png";

function Gallery(props) {
  const currentLink = {
    name: "portfolio",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentLink.name)}</h1>
      <p>{currentLink.name}</p>
      <div className="flex-row">
        <img src={photo} alt="project 1" className="img-thumbnail mx-1" />
      </div>
    </section>
  );
}
export default Gallery;
