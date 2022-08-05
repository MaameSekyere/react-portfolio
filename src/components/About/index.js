import React from "react";
import bgImage from "../../assets/images/BgImage.jpg";

function About() {
  return (
    <section className="my-5">
      <img src={bgImage} className="my-2" style={{ width: "100%" }} alt="bg" />
    </section>
  );
}

export default About;
