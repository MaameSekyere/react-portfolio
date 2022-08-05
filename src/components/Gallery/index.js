import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Gallery(props) {
  const { currentLink } = props;
  if (currentLink)
    return (
      <section>
        <h1 data-testid="h1tag">{capitalizeFirstLetter(currentLink.name)}</h1>
        <p>{currentLink.description}</p>
        <PhotoList Navlink={currentLink.name} />
      </section>
    );
}
export default Gallery;
