import React, { useState } from "react";

const PhotoList = ({ Navlink }) => {
  const [photos] = useState([
    {
      name: "MuchBetterDictionary",
      category: "portfolio",
      description:
        "https://muchbetterdictionary.github.io/MuchBetterDictionary/",
    },
    {
      name: "Easy-Shop",
      category: "portfolio",
      description: "https://github.com/Easy-Shop/Easy-Shop",
    },
    {
      name: "Weather-App",
      category: "portfolio",
      description: "https://maamesekyere.github.io/WeatherApp/",
    },
    {
      name: "Antwiwaa Basic HTML",
      category: "portfolio",
      description:
        "https://s3.amazonaws.com/shecodesio-production/challenge_submissions/files/000/628/425/original/SheCodes_Project_1.html?1640229376",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.Navlink === Navlink);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${Navlink}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
