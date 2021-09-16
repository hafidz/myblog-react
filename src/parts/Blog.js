import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  return (
    <section className="page-section blog" id="blog">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          My Blog
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
      </div>
    </section>
  );
}
