import React from "react";

function Footer() {
  return (
    <section className="section-primary">
      <div className="section-title-primary"></div>
      <div className="contact-container">
        <div className="contact-icons">
          <div>
            <a
              href="https://github.com/maamesekyere"
              target="_blank"
              rel="noreferrer"
              title="Github"
            >
              {" "}
              Github
            </a>
          </div>
        </div>
        <div className="contact-icons">
          <div className="contact-icons">
            <a
              href="linkedin.com/in/maame-a-sekyere-4a4719103"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              {" "}
              LinkedIn
            </a>
          </div>
        </div>
        <div className="contact-icons">
          <div>
            <a href="mailto:maameant@gmail.com" title="Email">
              {" "}
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
