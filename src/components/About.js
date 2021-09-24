import { faCoffee, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function About() {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-12 ms-auto">
            <p className="lead">Hi, My name is Hafiz Husien</p>

            <p className="lead">
              I’m a full stack developer with 7 years of experience.
            </p>
            <p className="lead">
              I’m not “rockstars” or “ninjas”, just talented and driven
              individuals who are incredibly passionate about making the best
              possible product.
            </p>

            <p className="lead">
              You have an awesome idea and wondering how to build it? Let’s do a
              short trial and I can help you build your MVP.
            </p>

            <p className="lead">
              You want for help to fix your existing application that failed to
              launch to a product or left by your previous developer? I am here
              to help you.
            </p>

            <p className="lead">
              Thank you for visiting my blog, just contact me even for just say
              hi or want to discuss about your project or your idea.
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://www.linkedin.com/in/hafiz-husein/"
            target="blank"
          >
            <i className="fas fa-download me-2"></i>
            <FontAwesomeIcon icon={faDownload} className="me-2" />
            Curriculum Vitae
          </a>
        </div>
      </div>
    </section>
  );
}
