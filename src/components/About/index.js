import React from "react";
import bgImage from "../../assets/images/BgImage.jpg";

function About() {
  return (
    <section className="my-5">
      <img src={bgImage} className="my-2" style={{ width: "50%" }} alt="bg" />
      <div className="about-text">
        <p>
          Hi! I'm Maame👋🏾 I have a passion for learning new skills and have
          utilized that passion to successfully complete a full-stack
          development through Columbia University bootcamp.
        </p>
        <br />
        <p>
          I also have front-end development experience through SheCodes in HTML,
          CSS, React and Javascript.
        </p>
        <br />
        <p>
          During the day, I provide quality and safe care to critically ill
          patients as a Registered Nurse.
        </p>
      </div>
    </section>
  );
}

export default About;
