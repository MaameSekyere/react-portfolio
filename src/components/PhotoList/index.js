import React, { useState } from "react";
import img from "../../assets/images/project1.png";
import img2 from "../../assets/images/project2.png";
import img3 from "../../assets/images/weather.png";
import img4 from "../../assets/images/pic2.png";
import img5 from "../../assets/images/project3.png";
const PhotoList = ({ Navlink }) => {
  const [photos] = useState([
    {
      name: "MuchBetterDictionary",
      category: "portfolio",
      description:
        "https://muchbetterdictionary.github.io/MuchBetterDictionary/",
      image: img,
    },
    {
      name: "Easy-Shop",
      category: "portfolio",
      description: "https://github.com/Easy-Shop/Easy-Shop",
      image: img2,
    },
    {
      name: "Weather-App",
      category: "portfolio",
      description: "https://maamesekyere.github.io/WeatherApp/",
      image: img3,
    },
    {
      name: "Antwiwaa Basic HTML",
      category: "portfolio",
      description:
        "https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/000/628/425/original/SheCodes_Project_1.html?1640229376",
      image: img4,
    },
    {
      name: "Purrfect Paws",
      category: "portfolio",
      description: "https://polar-island-23151.herokuapp.com/",
      image: img5,
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {photos.map((image, i) => (
          <a href={image.description}>
            <img
              alt={image.name}
              className="img-thumbnail mx-1"
              src={image.image}
              key={image.name}
            />{" "}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
